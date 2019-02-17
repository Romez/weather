import MetaWeather from './MetaWeather';
import ODWeather from './ODWeather';

const services = {
  MetaWeather,
  ODWeather,
};

export default serviceName => new services[serviceName]();
