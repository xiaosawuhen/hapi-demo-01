const ProductRoute = require('./business/product/route');

const routes = [
  ...ProductRoute.routes,
  {
    method: 'GET',
    path: '/generate',
    handler: function (request, h) {

        return {
            csrfToken: request.server.plugins.crumb.generate(request, h)
        };
    }
  }
];
module.exports = {
  routes: routes,
  regist: async (server) => {
    await server.route(routes);
  },
};
