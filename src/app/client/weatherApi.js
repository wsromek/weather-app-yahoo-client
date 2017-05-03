class WeatherAPIClient {
  constructor({ apiBaseUrl }) {
    this.apiBaseUrl = apiBaseUrl;
  }

  getWeatherForCity = (chosenCity) => {
    const API_WEATHER_ENDPOINT = '/weather';
    const requestUrl = `${this.apiBaseUrl}${API_WEATHER_ENDPOINT}?zipCodes=${chosenCity.zipCode}`;

    return fetch(requestUrl)
      .then(response => response.json())
      .then((json) => {
        if (typeof json.status !== 'undefined' && [400, 404].indexOf(json.status) !== -1) {
          throw new Error('There was an error while fetching from API, check console.');
        }

        return json;
      }).then((forecasts) => {
        const cities = forecasts.query.results.channel;
        const city = cities.filter(item => item.description.indexOf(chosenCity.name) !== -1);

        if (city.length === 0) {
          throw new Error('Chosen city not found in API response. Please try again, this might be just Yahoo issue.');
        }

        return city;
      });
  }
}

export default WeatherAPIClient;
