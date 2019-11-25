const productService = require('./service');
const Logger = require('../../common/Logger');
const Cache = require('../../cache');
const Boom = require('@hapi/boom');

const controller = {
  getproduct: async (request, h) => {
    // console.log('start');
    // const newLocal = await request.server.methods.httpGet('http://59.110.162.43/wgy/');
    // return newLocal;

    const message = await productService.getproduct();
    let result = false;
    await Cache.getKey('testkey').then(function(_result) {
      Logger.info(_result);
    });

    if(result) {
      throw Boom.badRequest();
    }

    console.log(result);
    // console.log(request.raw.req.headers);
    // Logger.info(request.auth.credentials.user);
    return message;
  },
  addproduct: async (request,h) => {
    const message = await productService.addproduct();
    return message;
  },
  updateproduct: async (request, h) => {
    const message = await productService.updateproduct(request.params.id);
    return message;
  },
  deleteproduct: async (request, h) => {
    const message = await productService.deleteproduct(request.params.id);
    return h.response(message + 'test');
  }
};

module.exports = controller;
