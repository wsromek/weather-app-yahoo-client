/* eslint no-console: ['error', { allow: ['error'] }] */

import React from 'react';
import PropTypes from 'prop-types';

import ForecastDisplay from './Forecast/ForecastDisplay';
import CitySelector from './CitySelector';
import LoadingMask from './Util/LoadingMask';
import ErrorMessage from './Util/ErrorMessage';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: {
        message: '',
      },
      loading: false,
      cities: props.cities,
      selectedCity: {},
      forecast: {},
    };

    this.apiClient = props.apiClient;
  }

  onForecastFetch = () => {
    const selectedCity = this.state.selectedCity;
    if (!selectedCity.zipCode || !selectedCity.name) {
      return this.setState({
        error: {
          message: 'Please select city first!',
        },
      });
    }

    this.setState({
      loading: true,
    });

    return this.apiClient
      .getWeatherForCity(selectedCity)
      .then((data) => {
        this.setState({
          forecast: data[0],
          error: {
            message: '',
          },
          loading: false,
        });
      })
      .catch((error) => {
        console.error(error);

        this.setState({
          error,
          loading: false,
        });
      });
  };

  onCityChange = (event) => {
    this.setState({
      selectedCity: {
        zipCode: event.target.value.split(':')[0],
        name: event.target.value.split(':')[1],
      },
    });
  };

  onErrorReset = () => {
    this.setState({
      error: false,
    });
  };

  render() {
    return (
      <div>
        <LoadingMask
          loading={this.state.loading}
        />
        <ErrorMessage
          error={this.state.error}
          onErrorReset={this.onErrorReset}
        />
        <CitySelector
          cities={this.state.cities}
          selectedCity={this.state.selectedCity}
          onForecastFetch={this.onForecastFetch}
          onCityChange={this.onCityChange}
        />
        <ForecastDisplay
          forecast={this.state.forecast}
        />
      </div>
    );
  }
}

WeatherApp.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    zipCode: PropTypes.string.string,
    name: PropTypes.string.isRequired,
  })).isRequired,
  apiClient: PropTypes.shape({
    getWeatherForCity: PropTypes.func.isRequired,
  }).isRequired,
};

export default WeatherApp;
