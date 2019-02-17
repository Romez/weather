#!/usr/bin/env node

import { argv } from 'yargs';
import { get } from 'lodash';
import Weather from '..';

const run = async () => {
  const serviceName = get(argv, 'service');
  const city = get(argv, ['_', 0]);

  const weather = new Weather(serviceName);
  const data = await weather.getInfoByCity(city);

  console.log(data);
};

run();
