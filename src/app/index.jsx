/* eslint-disable import/no-extraneous-dependencies */

import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import WeatherAPIClient from './client/weatherApi';
import WeatherApp from './components/WeatherApp';

const apiClient = new WeatherAPIClient({
  apiBaseUrl: 'http://weather-app-yahoo-api.herokuapp.com',
});

const cities = [
  {
    zipCode: '35801',
    name: 'Huntsville',
  },
  {
    zipCode: '99501',
    name: 'Anchorage',
  },
  {
    zipCode: '85001',
    name: 'Phoenix',
  },
  {
    zipCode: '72201',
    name: 'Little Rock',
  },
  {
    zipCode: '94102',
    name: 'San Francisco',
  },
  {
    zipCode: '94203',
    name: 'Sacramento',
  },
];

render(
  <WeatherApp
    cities={cities}
    apiClient={apiClient}
  />,
  document.getElementById('app'),
);
