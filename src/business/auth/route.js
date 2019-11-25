const Controller = require('./controller');

module.exports.routes = [
  {
    method: 'POST',
    path: '/api/login',
    options: {
      handler: Controller.login,
      // validate: async () =>{

      // },
      description: 'Login',
      tags: ['api', 'login'],
      auth: false
    }
  }
];
