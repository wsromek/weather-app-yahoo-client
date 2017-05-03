import React from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

function UpcomingDaysForecast({ temperatureUnits, dailyForecasts }) {
  const renderDayMarkup = (forecast, index) => {
    return (
      <Col sm={4} key={index}>
        <div className="daily-forecast-wrapper">
          <div className="forecast-date">{forecast.date}</div>
          <img alt="condition_image" src={`http://l.yimg.com/a/i/us/we/52/${forecast.code}.gif`}/>
          <div className="forecast-temp-range">
            Temp: {forecast.low}&deg; {temperatureUnits}
            - {forecast.high}&deg; {temperatureUnits}
          </div>
        </div>
      </Col>
    );
  };

  const renderRow = (data, rowNumber) => {
    const forecasts = [];

    data.map((forecast, index) => {
      forecasts.push(renderDayMarkup(forecast, index + 3 * rowNumber));
    });

    return (
      <Row key={rowNumber}>
        {forecasts}
      </Row>
    );
  };

  const renderForecasts = (forecasts) => {
    const rows = [];

    forecasts.reduce((previous, dailyForecast, index) => {
      if (previous.length === 2 || index === forecasts.length - 1) {
        previous.push(dailyForecast);
        rows.push(previous);
        return [];
      }

      previous.push(dailyForecast);
      return previous;
    }, []);

    return rows.map((row, rowNumber) => {
      return renderRow(row, rowNumber);
    });
  };

  return (
    <div>
      <h2>Upcoming {dailyForecasts.length} days</h2>
      <Grid>
        {renderForecasts(dailyForecasts)}
      </Grid>
    </div>
  );
}

export default UpcomingDaysForecast;
