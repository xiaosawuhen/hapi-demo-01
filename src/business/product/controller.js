const productService = require('./service');

const controller = {
  getproduct: async () => {
    const message = await productService.getproduct();
    return message;
  },
};

module.exports = controller;
