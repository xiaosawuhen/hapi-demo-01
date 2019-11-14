'use strict';

const Hapi = require('@hapi/hapi');
const DotEnv = require('dotenv');
const Router = require('./router');
const Plugin = require('./plugin');

module.exports = {
  start: async () => {
    DotEnv.config({
      path: `${process.cwd()}/.env`,
    });

    const server = Hapi.server({
      port: process.env.PORT,
      host: process.env.HOST,
    });

    await Plugin.regist(server);
    await server.route(Router.routes);

    await server.start();

    return server;
  },
};
