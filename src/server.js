'use strict';

const Hapi = require('@hapi/hapi');
const DotEnv = require('dotenv');
const Router = require('./router');
const Plugin = require('./plugin');
const CatboxRedis = require('@hapi/catbox-redis');
const Cache = require('./cache');
const Logger = require('./common/Logger');
const Scheme = require('./auth/JwtScheme');

module.exports = {
  config: async () => {
    DotEnv.config({
      path: `${process.cwd()}/.env`
    });

    const server = Hapi.server({
      port: process.env.PORT,
      host: process.env.HOST,
      cache: [
        {
          name: 'data_cache',
          provider: {
            constructor: CatboxRedis,
            options: {
              partition: 'uscache',
              host: '127.0.0.1',
              port: 6379,
              db: 0
              // tls: {},
            }
          }
        }
      ]
    });

    // await Cache.regist(server);
    // await Cache.registServerMethod(server, HttpClient);
    await Plugin.regist(server);

    server.auth.scheme('JwtScheme', Scheme);
    server.auth.strategy('jwt', 'JwtScheme');

    await server.initialize();
    const cacheClient = await server.cache({cache: 'data_cache', segment: 'product', expiresIn: 60 * 60 * 1000});
    cacheClient.set('testkey','dgaerfvzfvaw');
    await Cache.createCache(server, 'data_cache', 'testcache');
    await Cache.addKey('testkey', '123123123123');

    await server.route(Router.routes);

    // await server.cache.provision({
    //   provider: {
    //     constructor: CatboxRedis,
    //     options: {
    //         partition : 'data_cached_data',
    //         host: '127.0.0.1',
    //         port: 6379,
    //         // db: 0,
    //         // tls: {},
    //     }
    //   },
    //   name: 'data_cache', });

    Logger.info('Server Start!!!!');

    await server.start();

    return server;
  }
};
