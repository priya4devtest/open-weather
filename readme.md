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
`mocha test/openWeather.test.js`

### Weather API Key

You can get a weather API key from open weather and configure it in `./config/data.json`
