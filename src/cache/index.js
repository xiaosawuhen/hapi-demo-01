let cacheClient = {};

module.exports = {
  registServerMethod: async (server, methodObj) => {
    for (let methodName in methodObj) {
      server.method(methodName, methodObj[methodName], {
        cache: {
          expiresIn: 60,
          staleIn: 10,
          staleTimeout: 10,
          generateTimeout: 10
        }
      });
    }
  },
  createCache: async (server, _cache, _segment) => {
    cacheClient = server.cache({cache: _cache, segment: _segment, expiresIn: 60 * 60 * 1000});
  },
  addKey: async (key, value) => {
    await cacheClient.set(key, value);
  },
  getKey: async (key) => {
    return await cacheClient.get(key);
  }
};
