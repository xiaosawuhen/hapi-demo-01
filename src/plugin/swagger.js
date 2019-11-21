const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../../package');

const swaggerOptions = {
  info: {
    title: 'Demo API Documentation',
    version: Pack.version,
  },
};

const config = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
];

module.exports = {plugin: config};
