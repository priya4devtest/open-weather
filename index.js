'use strict';
let path = require('path');

let data = require(path.join(__dirname, './config/data'));

let OpenWeather = require('./openWeather');
let openWeather = new OpenWeather();

 const weatherReport = async () => {
    let forecasts = await openWeather.getFiveDayForecast(data['sydneyCode']);
    let daysWithTempAbove18 = await openWeather.getDaysWithTempABove18(forecasts);
    let rainyDays = await openWeather.getRainyDays(forecasts);
    
    console.log("Number of days with temp above 18deg is " + daysWithTempAbove18.length);
    console.log("Number of days with Rain forecast is " + rainyDays.length);
 };

 weatherReport();