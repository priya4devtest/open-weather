### Introduction

* The API tests are written in Nodejs. 
* Mocha is the test framework used.
* Chai is used for writing assertions.
* Superagent is used for sending and receiving http requests

### Installation

It is assumed the user already has nodejs installed on the machine.

At the root of the directory

`npm install`

### Running tests

You can simply `npm test` or 
`npx mocha .\test\openWeather.api.test.js`

### Weather API Key

You can get a weather API key from open weather and configure it in `./config/data.json`


### cli client 

Run `node index.js` to run the cli client.

### express app

Run `node app.js` to start the express app.
The app listens on port 3000. 
APIs available are 
* `/weather/sydney/forecast/5days/tempabove18` to get the days with temp above 18 in the next 5 days
* `/weather/sydney/forecast/5days/rainy` to get the days with rain forecast in the next 5 days