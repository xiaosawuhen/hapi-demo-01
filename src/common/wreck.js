const Wreck = require('@hapi/wreck');
const Http = require('http');
const Https = require('https');

// const method = 'GET'; // GET, POST, PUT, DELETE
// const uri = 'https://192.168.240.1:9002/authorizationserver/oauth/token?client_id=kyma&client_secret=123456&grant_type=client_credentials';
// const uri = 'https://www.baidu.com/';
// const readableStream = Wreck.toReadableStream('foo=bar');

let wreck = Wreck.defaults({
    // headers: { 'x-foo-bar': 123 },
    agents: {
        https: new Https.Agent({ maxSockets: 100 }),
        http: new Http.Agent({ maxSockets: 1000 }),
        httpsAllowUnauthorized: new Https.Agent({ maxSockets: 100, rejectUnauthorized: false })
    }
});

// cascading example -- does not alter `wreck`
// inherits `headers` and `agents` specified above
const wreckWithTimeout = wreck.defaults({
    timeout: 5
});

// all attributes are optional
const options = {
    baseUrl: '',
    // payload: readableStream || 'foo=bar' || Buffer.from('foo=bar'),
    headers: { /* http headers */ },
    redirects: 3,
    beforeRedirect: (redirectMethod, statusCode, location, resHeaders, redirectOptions, next) => next(),
    redirected: function (statusCode, location, req) {},
    // timeout: 1000,    // 1 second, default: unlimited
    maxBytes: 1048576, // 1 MB, default: unlimited
    rejectUnauthorized: false,
    agent: null,         // Node Core http.Agent
    // secureProtocol: 'SSLv3_method', // The SSL method to use
    secureProtocol: 'TLSv1_2_method', // TLSv1_2_method
    ciphers: 'ECDHE-RSA-AES128-GCM-SHA256' // The TLS ciphers to support
};

module.exports = {
    addHeaders: async (_headers = {}) => {
        wreck = Wreck.defaults({
            headers: _headers
        });
    },
    post: async (uri, _options = {}) => {
        Object.assign(options, _options);
        const{res, payload} = await wreck.post(uri, options);
        return payload.toString();
    },
    get: async (uri, _options = {}) => {
        Object.assign(options, _options);
        const{res, payload} = await wreck.get(uri, options);
        return payload.toString();
    },
    put: async (uri, _options = {}) => {
        Object.assign(options, _options);
        const{res, payload} = await wreck.put(uri, options);
        return payload.toString();
    },
    delete: async (uri, _options = {}) => {
        Object.assign(options, _options);
        const{res, payload} = await wreck.delete(uri, options);
        return payload.toString();
    }
}