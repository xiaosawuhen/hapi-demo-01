const Httpclient = require('@hapi/wreck');

module.exports = {
  httpGet: async (url) => {
    // http://59.110.162.43/wgy/
    console.log(url);
    const {payload} = await Httpclient.get('http://59.110.162.43/wgy/');
    // console.log(payload.toString());
    return payload.toString();
  },
  httpPost: async (url, body) => {
    const {res, payload} = await Httpclient.post(url);
    return payload;
  },
  httpPut: async (url, body) => {
    const {res, payload} = await Httpclient.put(url);
    return payload;
  },
  httpDelete: async (url, body) => {
    const {res, payload} = await Httpclient.delete(url);
    return payload;
  },
};
