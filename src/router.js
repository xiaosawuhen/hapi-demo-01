const ProductRoute = require('./business/product/route');

const routes = [];

// add product routes
routes.push.apply(routes, ProductRoute.routes);

module.exports = { routes: routes };
