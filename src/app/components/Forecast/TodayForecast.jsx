import React from 'react';
import { Jumbotron, Col, Row, Grid } from 'react-bootstrap';

function TodayForecast({ conditions: { units, currentConditions, astronomy, atmosphere, wind } }) {
  const renderWindDirectionIndicator = () => {
    const windArrowStyle = {
      transform: `rotate(${wind.direction}deg)`,
    };

    return <div style={windArrowStyle} className="arrow">&#x2191;</div>;
  };

  const renderConditionImage = (code) => {
    return <img alt="condition_image" src={`http://l.yimg.com/a/i/us/we/52/${code}.gif`}/>;
  };

  const renderFormattedTemperature = (value) => {
    return `${value}${String.fromCharCode(176)} ${units.temperature}`;
  };

  return (
    <Jumbotron>
      <Grid>
        <Row>
          <Col sm={4}>
            <div className="tile">
              <h3>Wind</h3>
              <div>Speed: {wind.speed} {units.speed}</div>
              <div>Chill: {renderFormattedTemperature(wind.chill)}</div>
              <div>Direction: {wind.direction}&deg;</div>
              {renderWindDirectionIndicator()}
            </div>
          </Col>
          <Col sm={4}>
            <div className="tile">
              <h3>Conditions</h3>
              <div>Temp: {renderFormattedTemperature(currentConditions.temp)}</div>
              {renderConditionImage(currentConditions.code)}
              <div>
                <div>Sunrise: {astronomy.sunrise}</div>
                <div>Sunset: {astronomy.sunset}</div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="tile">
              <h3>Atmosphere</h3>
              <div>Humidity: {atmosphere.humidity}%</div>
              <div>Pressure: {atmosphere.pressure} {units.pressure}</div>
              <div>Visibility: {atmosphere.visibility} {units.distance} </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </Jumbotron>
  );

}

export default TodayForecast;
