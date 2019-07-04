var coneccionDB = require('./conexion.js');
var mongoose = coneccionDB.mongoose;

var mSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: {
    type: Number,
    required: true
  },
  nombre: String,
  descripcion: String,
  precio:Number,
  cantidad:Number
});
var coleccion = mongoose.model('producto', mSchema);

function insertar(id, nombre, descripcion,precio,cantidad, callback) {
  var nuevoColeccion = new coleccion({
    _id: new mongoose.Types.ObjectId(),
    id:id,
    nombre:nombre,
    descripcion:descripcion,
    precio:precio,
    cantidad:cantidad
  });

  nuevoColeccion.save(callback);
}

module.exports.insertar = insertar;
