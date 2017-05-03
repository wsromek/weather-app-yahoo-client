import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

function CitySelector({ cities, onForecastFetch, onCityChange }) {
  const renderSelectbox = () => {
    const options = cities.map(city => <option key={cities.zipCode} value={`${city.zipCode}:${city.name}`}>{city.name}</option>);
    options.unshift(<option key="-1" value="0">Choose city:</option>);

    return (
      <FormControl
        componentClass="select"
        placeholder="Choose city"
        name="city-list"
        id="city-list"
        onChange={onCityChange}
      >
        {options}
      </FormControl>
    );
  };

  return (
    <section className="selection">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Weather Forecast
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullRight>
          <FormGroup>
            {renderSelectbox()}
          </FormGroup>
          <Button
            style={{ marginLeft: '5px' }}
            bsStyle="primary"
            onClick={onForecastFetch}
          >
            Get forecast
          </Button>
        </Navbar.Form>
      </Navbar>
    </section>
  );
}

CitySelector.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    zipCode: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onForecastFetch: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default CitySelector;
