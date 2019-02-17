import url from 'url';
import axios from 'axios';
import { get } from 'lodash';

export default class MetaWeather {
  constructor(http = axios) {
    this.http = http;
  }

  async getInfoByCity(city) {
    const linkLocation = url.format({
      protocol: 'https',
      hostname: 'www.metaweather.com',
      pathname: '/api/location/search/',
      query: { query: city },
    });

    const locationResp = await this.http.get(linkLocation);
    const cityId = get(locationResp, ['data', 0, 'woeid']);

    const weatherLink = url.format({
      protocol: 'https',
      hostname: 'www.metaweather.com',
      pathname: ['/api/location', cityId].join('/'),
    });

    const { data } = await this.http.get(weatherLink);

    return {
      temperature: get(data, ['consolidated_weather', 0, 'the_temp']),
    };
  }
}
