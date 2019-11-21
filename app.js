const server = require('./src/server');
const Logger = require('./src/common/Logger');

server.config().then((server) => {
    Logger.info('Server running on ' + server.info.uri);

    process.on('unhandledRejection', (err) => {
    
        console.log(err);
        process.exit(1);
    });
});

