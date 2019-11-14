const swagger = require('./swagger');

const plugins = {
    regist: async (server) => {
        await server.register(swagger.plugin);
    }
}

module.exports = plugins;
