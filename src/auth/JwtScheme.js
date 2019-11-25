const Boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

module.exports = function (server, options) {

    return {
        authenticate: function (request, h) {

            const req = request.raw.req;
            const authorization = req.headers.authorization;
            const token = authorization.replace('Bearer', '').trim();
            try{
                const credentials = jwt.verify(token, process.env.AUTH_PRIVATE_KEY);
    
                if (!authorization) {
                    throw Boom.unauthorized(null, 'Custom');
                }

                return h.authenticated({ credentials: credentials});
            } catch(err) {
                throw Boom.unauthorized(null, 'Custom');
            }

        }
    };
};