const path = require('path');
const express = require('express');
let data = require(path.join(__dirname, './config/data'));
let OpenWeather = require('./openWeather');
let openWeather = new OpenWeather();

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/weather/sydney/forecast/5days/rainy', async (req, res) => {
    let forecasts = await openWeather.getFiveDayForecast(data['sydneyCode']);
    let rainyDays = await openWeather.getRainyDays(forecasts);
    res.send(rainyDays)

})

app.get('/weather/sydney/forecast/5days/tempAbove18', async (req, res) => {
    let forecasts = await openWeather.getFiveDayForecast(data['sydneyCode']);
    let daysWithTempAbove18 = await openWeather.getDaysWithTempABove18(forecasts);
    res.send(daysWithTempAbove18);
})