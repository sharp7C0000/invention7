const Hapi  = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const fs = require('fs');

const tls = {
  key : fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt')
};

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
    tls : tls
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();