var conexion = require('./conexion.js');

function start(){
  console.log('host',process.env['HOST']);
  console.log('puerto',process.env['PORT']);
  conexion.start(process.env['HOST'],process.env['PORT']);
}

start();
