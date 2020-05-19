'use strict';

let path = require('path');
let chai = require('chai');
let expect = chai.expect;
let agentOne = require('superagent');
let data = require(path.join(__dirname, '../config/data'));
let res;
let forecasts;
let rainyDays = [];
let above18DegDays = [];
//console.log(data);
describe('Open Weather API', function () {
    this.timeout(data['apiTimeout']);

    before('should return the next 5 days forecast', async function () {
        res = await agentOne
        .get(data.url + 'data/2.5/forecast?id=' + data['sydneyCode'] + '&appid=' + data['apiKey']);
        console.log(JSON.stringify(res.body));
        forecasts = res.body.list;
        //console.log("Forecast " + JSON.stringify(forecasts));
      });

    it('should display status as 200', async function()  {
        expect(res.body['cod']) === '200';
        console.log("status code is " + res.body['cod']);
    });

    it('should display correct city details', async function()  {
        expect(res.body['city']['id']) === '2147714';
        expect(res.body['city']['name']) === 'Sydney';
        expect(res.body['city']['country']) === 'AU';
        expect(res.body['city']['timezone']) === '36000';
        expect(res.body['city']['sunrise']).to.not.be.null;   
        expect(res.body['city']['sunset']).to.not.be.null; 
    });

    it('should be able to shortlist days with temp above 18deg', async function() {
        for(let forecast of forecasts){
            if (forecast['main']['temp_min'] >= (18+273.15))
                above18DegDays.push(forecast.dt_txt)
        }
        console.log("Days with temp above 18deg is " + above18DegDays);
        let countDays = [];
            for (let days of above18DegDays){
                if (countDays.includes(days.substring(0,10)) === false)
                    countDays.push(days.substring(0,10));
            }
            console.log("Number of days with temp above 18deg is " + countDays.length);
        });
    
    it('should be able to shortlist rainy days', async function() {
        for(let forecast of forecasts){
            if (forecast.weather[0].main === 'Rain')
                    rainyDays.push(forecast.dt_txt)
        }
        console.log("Days with Rain forecast are " + rainyDays);
        let countRainDays = [];
        for (let days of rainyDays){
            if (countRainDays.includes(days.substring(0,10)) === false)
                    countRainDays.push(days.substring(0,10));
        }
        console.log("Number of days with Rain forecast is " + countRainDays.length);
        });
    });