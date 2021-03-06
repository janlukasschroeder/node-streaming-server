#!/usr/bin/env node

const Chance = require('chance');
const chance = new Chance();

require('http').createServer((req, res) => {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });

  while(chance.bool({likelihood: 95})) {
    res.write(chance.string() + '\n');
  }

  res.end('\n The end...\n');

  res.on('finish', () => console.log('All data sent'))
}).listen(8080, () => console.log('Listening on http://localhost:8080'));