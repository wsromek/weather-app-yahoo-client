import React from 'react';
import renderer from 'react-test-renderer';
import forecastFixture from '../../fixtures/forecast';
import ForecastDisplay from '../../../src/app/components/Forecast/ForecastDisplay';

describe('ForecastDisplay component', () => {
  it('renders correctly', () => {
    const present = renderer.create(
      <ForecastDisplay forecast={forecastFixture} />,
    ).toJSON();

    const absent = renderer.create(
      <ForecastDisplay forecast={{}} />,
    ).toJSON();

    expect(present).toMatchSnapshot();
    expect(absent).toMatchSnapshot();
  });
});
