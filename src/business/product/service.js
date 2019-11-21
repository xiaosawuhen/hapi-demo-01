const Httpclient = require('@hapi/wreck');
const superagent = require('superagent');

const service = {
  getproduct: async () => {
    const Wreck = require('../../common/wreck');
    const uri =
      'https://192.168.240.1:9002/authorizationserver/oauth/token?client_id=kyma&client_secret=123456&grant_type=client_credentials';
    const body = await Wreck.post(uri, {name: 'wnn'});
    return body;
  },
  addproduct: async () => {
    return 'welcome to add products from me !!!';
  },
  updateproduct: async (id) => {
    superagent
      .post('/api/pet')
      .then(console.log)
      .catch(console.error);
    return 'welcome to update product ' + id + ' from me !!!';
  },
  deleteproduct: async (id) => {
    return 'welcome to delete product ' + id + ' from me !!!';
  }
};

module.exports = service;
