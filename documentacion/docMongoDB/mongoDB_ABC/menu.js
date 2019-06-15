var coneccionDB = require('./conexion.js');
var mongoose = coneccionDB.mongoose;

var menuSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: {
    type: Number,
    required: true
  },
  nombre: String,
  precio: Number,
  imagen: String,
  precio_produccion: Number,
  tiempo_preparacion: Date
});
var menu = mongoose.model('menu', menuSchema);

function insertar(id, nombre, precio, imagen,precio_produccion,tiempo_preparacion, callback) {
  var nuevoMenu = new menu({
    _id: new mongoose.Types.ObjectId(),
    id:id,
    nombre:nombre,
    precio:precio,
    imagen:imagen,
    precio_produccion:precio_produccion,
    tiempo_preparacion:tiempo_preparacion
  });

  nuevoMenu.save(callback);
}

module.exports.insertar = insertar;
