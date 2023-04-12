const weatherCard = document.querySelector('.weather-card');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const description = document.querySelector('.description');

fetch('https://goweather.herokuapp.com/weather/Dublin')
  .then(response => response.json())
  .then(data => {
    temperature.textContent = `Temperature: ${data.temperature}°C`;
    wind.textContent = `Wind: ${data.wind}`;
    description.textContent = `Description: ${data.description}`;
  })
  .catch(error => console.log(error));

const quoteCard = document.querySelector('.quote-card');
const quote = document.querySelector('.quote');

fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(resp => resp.json())
  .then(function (data) {
      quote.innerHTML = `"${data[0]}"`;
  })
  .catch(error => console.log(error));

const gotQuoteCard = document.querySelector('.got-quote-card');
const gotQuote = document.querySelector('.got-quote');

fetch('https://api.gameofthronesquotes.xyz/v1/random')
  .then(response => response.json())
  .then(data => gotQuote.textContent = data.sentence)
  .catch(error => console.log(error));
