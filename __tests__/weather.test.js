import Weather from '../src';
import ODWeather from '../src/services/ODWeather';
import ODWeatherResponse from './__fixtures__/ODWeatherResponse.json';

test('weather', async () => {
  const get = () => Promise.resolve({ data: ODWeatherResponse });
  const serviceFactoryMock = () => new ODWeather({ get });

  const weather = new Weather('ODWeather', serviceFactoryMock);

  const info = await weather.getInfoByCity('berlin');

  expect({ temperature: 16.7 }).toEqual(info);
});
