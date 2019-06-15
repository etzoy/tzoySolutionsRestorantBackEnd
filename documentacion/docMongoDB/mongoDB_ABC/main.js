var conexion = require('./conexion.js');
var menu = require('./menu.js');

function start(){
  console.log('host',process.env['HOST']);
  console.log('puerto',process.env['PORT']);
  conexion.start(process.env['HOST'],process.env['PORT'],conectado);
}

start();

function conectado(){
  console.log(process.env['id'],process.env['nombre'],process.env['precio'],process.env['imagen'],process.env['precio_produccion']);
  menu.insertar(process.env['id'],process.env['nombre'],process.env['precio'],process.env['imagen'],process.env['precio_produccion'],new Date(),function(error){
    if(error){
      console.log('hubo un error al guardar',error);
    }else {
      console.log('guardado satisfactoriamente');
    }
  });
}
