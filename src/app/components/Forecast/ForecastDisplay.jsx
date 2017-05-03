import React from 'react';
import TodayForecast from './TodayForecast';
import UpcomingDaysForecast from './UpcomingDaysForecast';

function ForecastDisplay({ forecast: { units, item, astronomy, atmosphere, wind, location } }) {
  if (Object.keys(arguments[0].forecast).length === 0) {
    return null;
  }

  const dailyForecasts = item.forecast;
  const currentConditions = item.condition;

  const todayConditions = {
    units,
    currentConditions,
    atmosphere,
    astronomy,
    wind,
  };

  return (
    <section className='forecast'>
      <h2>Current condition in {location.city}, {location.region}</h2>

      <TodayForecast
        conditions={todayConditions}
      />
      <UpcomingDaysForecast
        dailyForecasts={dailyForecasts}
        temperatureUnit={units.temperature}
      />
    </section>
  );

}

export default ForecastDisplay;

