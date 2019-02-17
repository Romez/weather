import serviceFactory from './services/serviceFactory';

export default class Weather {
  constructor(serviceName, factory = serviceFactory) {
    this.service = factory(serviceName);
  }

  getInfoByCity(city) {
    return this.service.getInfoByCity(city);
  }
}
