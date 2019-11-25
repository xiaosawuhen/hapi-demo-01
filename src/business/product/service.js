const Httpclient = require('@hapi/wreck');
const superagent = require('superagent');
const Wreck = require('../../common/wreck');

const service = {
  getproduct: async () => {
    const uri =
      // 'https://192.168.240.1:9002/authorizationserver/oauth/token?client_id=kyma&client_secret=123456&grant_type=client_credentials';
      'http://59.110.162.43/wgy/';
    Wreck.addHeaders({key:'123123'});
    const body = await Wreck.get(uri, {name: 'wnn'});
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
