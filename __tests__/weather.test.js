import Weather from '../src';
import MetaWeather from '../src/services/MetaWeather';
import MetaWeatherResponseFixture from './MetaWeatherResponse.fixture.js';

test('weather', async () => {
  const get = () => Promise.resolve({ data: MetaWeatherResponseFixture });
  const serviceFactoryMock = () => new MetaWeather({ get });

  const weather = new Weather('MetaWeather', serviceFactoryMock);

  const data = await weather.getInfoByCity('berlin');
  console.log(data);
});

