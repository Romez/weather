import url from 'url';
import axios from 'axios';
import { get } from 'lodash';

export default class ODWeather {
  constructor(http = axios) {
    this.http = http;
  }

  async getInfoByCity(city) {
    const link = url.format({
      protocol: 'http',
      hostname: 'api.oceandrivers.com',
      pathname: ['v1.0/getWeatherDisplay', city].join('/'),
      query: { period: 'latestdata' },
    });

    const { data } = await this.http.get(link);
    return {
      temperature: get(data, 'TEMPERATURE'),
    };
  }
}
