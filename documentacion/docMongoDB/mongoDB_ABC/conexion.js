var mongoose = require('mongoose');

const options = { //https://mongoosejs.com/docs/connections.html
  useNewUrlParser: true,
  //useCreateIndex: false,
  //useFindAndModify: true,
  autoIndex: false, // Don't build indexes This is great for development, but not ideal for large production deployments, because index builds can cause performance degradation.
  autoReconnect:true,
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 1000, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 3000, // Give up initial connection after 3 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};
var notificar;

//start();
function start(dominio,puerto,callback){
  if(!dominio){
    dominio='mongodb-server';
  }
  if(!puerto){
    puerto=27017;
  }
  notificar=callback;
  var conexion='mongodb://'+dominio+':'+puerto+'/restaurante';
  console.log('string conexion',conexion);
  mongoose.connect(conexion,options);
}

mongoose.connection.on('error', error);
mongoose.connection.on('connected', conectado);
mongoose.connection.on('disconnected', desconectado);

function error(err){
  console.log("coneccionDB.js: error al conectarse a mongodb");
}

function conectado(){
  console.log("coneccionDB.js: conectado a mongodb");
  notificar();
}

function desconectado(){
  console.log("coneccionDB.js: desconectado de mongodb");
}

module.exports.mongoose = mongoose;
module.exports.start = start;
