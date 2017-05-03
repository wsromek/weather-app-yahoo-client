import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CitySelector from '../../src/app/components/CitySelector';

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
const onCityChangeMock = jest.fn();
const onForecastFetchMock = jest.fn();

describe('CitySelector component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <CitySelector
        cities={cities}
        onCityChange={onCityChangeMock}
        onForecastFetch={onForecastFetchMock}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('calls onCityChange when selectbox value changes', () => {
    const component = mount(
      <CitySelector
        cities={cities}
        onCityChange={onCityChangeMock}
        onForecastFetch={onForecastFetchMock}
      />,
    );

    component.find('select').simulate('change');

    expect(onCityChangeMock).toHaveBeenCalled();
  });

  it('calls onForecastFetch when "Fetch" button is clicked', () => {
    const component = mount(
      <CitySelector
        cities={cities}
        onCityChange={onCityChangeMock}
        onForecastFetch={onForecastFetchMock}
      />,
    );

    component.find('button').simulate('click');

    expect(onForecastFetchMock).toHaveBeenCalled();
  });
});
