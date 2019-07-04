var coneccionDB = require('./conexion.js');
var mongoose = coneccionDB.mongoose;

var mSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: {
    type: Number,
    required: true
  },
  nombre: String,
  descripcion: String
});
var coleccion = mongoose.model('mesa', mSchema);

function insertar(id, nombre, descripcion, callback) {
  var nuevoColeccion = new coleccion({
    _id: new mongoose.Types.ObjectId(),
    id:id,
    nombre:nombre,
    descripcion:descripcion
  });

  nuevoColeccion.save(callback);
}

module.exports.insertar = insertar;
