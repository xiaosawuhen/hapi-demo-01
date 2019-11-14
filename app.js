const server = require('./src/server');

server.start().then((server) => {
    console.log('Server running on %s', server.info.uri);

    process.on('unhandledRejection', (err) => {
    
        console.log(err);
        process.exit(1);
    });
});

