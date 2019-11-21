const swagger = require('./swagger');
const labbr = require('laabr');
const crumb = require('./crumb');

const plugins = {
  regist: async (server) => {
    await server.register(swagger.plugin);
    // await server.register(labbr.plugin);
    await server.register(crumb.plugin);
  }
};

module.exports = plugins;
