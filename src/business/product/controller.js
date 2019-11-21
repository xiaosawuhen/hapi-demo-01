const productService = require('./service');
const Logger = require('../../common/Logger');
const Cache = require('../../cache');

const controller = {
  getproduct: async (request, h) => {
    // console.log('start');
    // const newLocal = await request.server.methods.httpGet('http://59.110.162.43/wgy/');
    // return newLocal;

    const message = await productService.getproduct();
    await Cache.getKey('testkey').then(function(result){
      Logger.info(result);
    });
    return message;
  },
  addproduct: async () => {
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
  },
};

module.exports = controller;
