const Vision = require('@hapi/vision');
const Crumb = require('@hapi/crumb');

const plugins = [
  Vision,
  {
    plugin: Crumb,
    options: {
      restful: true,
      cookieOptions: {
        isSecure: false
      }
    }
  }
];

module.exports = {plugin: plugins};
