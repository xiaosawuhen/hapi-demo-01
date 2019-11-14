const Controller = require('./controller');

module.exports.routes = [
  {
    method: 'GET',
    path: '/api/product/get',
    options: {
      handler: Controller.getproduct,
      // validate: async () =>{

      // },
      description: 'Root Path.',
      tags: ['api', 'root'],
      auth: false,
    },
  },
];
