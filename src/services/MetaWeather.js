import url from 'url';
import axios from 'axios';
import { get } from 'lodash';

export default class MetaWeather {
  constructor(http = axios) {
    this.http = http;
  }

  async getInfoByCity(city) {
    const cityId = await this.getCityIdByName(city);

    const link = url.format({
      protocol: 'https',
      hostname: 'www.metaweather.com',
      pathname: ['/api/location', cityId].join('/'),
    });

    const { data } = await this.http.get(link);

    return {
      temperature: get(data, ['consolidated_weather', 0, 'the_temp']),
    };
  }

  async getCityIdByName(city) {
    const link = url.format({
      protocol: 'https',
      hostname: 'www.metaweather.com',
      pathname: '/api/location/search/',
      query: { query: city },
    });

    const { data } = await this.http.get(link);
    return get(data, [0, 'woeid']);
  }
}
