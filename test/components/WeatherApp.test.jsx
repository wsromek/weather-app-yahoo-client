import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import forecastFixture from '../fixtures/forecast';
import WeatherApp from '../../src/app/components/WeatherApp';

const cities = [
  {
    zipCode: '35801',
    name: 'Huntsville',
  },
  {
    zipCode: '99501',
    name: 'Anchorage',
  },
];

const apiClientStub = {
  getWeatherForCity: jest.fn().mockReturnValue(
    new Promise(resolve => process.nextTick(() => resolve([forecastFixture]))),
  ),
};

describe('WeatherApp component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <WeatherApp cities={cities} apiClient={apiClientStub} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('fetches weather for selected city when "Get forecast" is clicked', () => {
    const component = mount(<WeatherApp cities={cities} apiClient={apiClientStub} />);

    component.find('select').simulate('change', {
      target: {
        value: '99501:Anchorage',
      },
    });

    component.find('button').simulate('click');

    expect(apiClientStub.getWeatherForCity).toHaveBeenCalledWith({
      zipCode: '99501',
      name: 'Anchorage',
    });
  });
});
