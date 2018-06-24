const { createClient } = require('./index');
require('dotenv').config();

const client = createClient(process.env.MTA_API_KEY);
client.arrivals({ lines: 'L', stations: '1 Av' })
  .then((arrivals) => {
    if (typeof arrivals[0] !== 'object') {
      throw new Error(`arrivals should contain object, found: \n${JSON.stringify(arrivals[0], null, 2)}`);
    }
  });

const { stations } = require('./index');

if (typeof stations[0]["Station ID"] !== 'string') {
  throw new Error('stations should contain an object with a `Station ID` property');
}

console.log('Tests complete');
