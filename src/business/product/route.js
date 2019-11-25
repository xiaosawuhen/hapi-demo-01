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
      // auth: 'jwt'
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/api/product/update/{id}',
    options: {
      handler: Controller.updateproduct,
      // validate: async () =>{

      // },
      description: 'Root Path.',
      tags: ['api', 'root'],
      auth: false
    }
  },
  {
    method: 'PUT',
    path: '/api/product/add',
    options: {
      handler: Controller.addproduct,
      // validate: async () =>{

      // },
      description: 'Root Path.',
      tags: ['api', 'root'],
      auth: false
    }
  },
  {
    method: 'DELETE',
    path: '/api/product/delete/{id}',
    options: {
      handler: Controller.deleteproduct,
      // validate: async () =>{

      // },
      description: 'Root Path.',
      tags: ['api', 'root'],
      auth: false
    }
  }
];
