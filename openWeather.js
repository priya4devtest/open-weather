let path = require('path');
let agentOne = require('superagent');
let data = require(path.join(__dirname, './config/data'));
let res;
let forecasts;
let rainyDays = [];
let above18DegDays = [];

class OpenWeather {
    getFiveDayForecast = async (cityCode) => {
        res = await agentOne
        .get(data.url + 'data/2.5/forecast?id=' + cityCode + '&appid=' + data['apiKey']);
        //console.log(JSON.stringify(res.body));
        forecasts = res.body.list;
        return forecasts;
    };

    getDaysWithTempABove18 = async (forecasts) => {
        for(let forecast of forecasts){
            if (forecast['main']['temp_min'] >= (18+273.15))
                above18DegDays.push(forecast.dt_txt)
        }
        //console.log("Days with temp above 18deg is " + above18DegDays);
        let countDays = [];
            for (let days of above18DegDays){
                if (countDays.includes(days.substring(0,10)) === false)
                    countDays.push(days.substring(0,10));
            }
            //console.log("Number of days with temp above 18deg is " + countDays.length);
            return countDays;
    };

    getRainyDays = async (forecasts) => {
        for(let forecast of forecasts){
            if (forecast.weather[0].main === 'Rain')
                rainyDays.push(forecast.dt_txt)
        }
        //console.log("Days with Rain forecast are " + rainyDays);
        let countRainDays = [];
        for (let days of rainyDays){
            if (countRainDays.includes(days.substring(0,10)) === false)
                countRainDays.push(days.substring(0,10));
        }
        //console.log("Number of days with Rain forecast is " + countRainDays.length);
        return countRainDays;

    };
};

module.exports = OpenWeather;