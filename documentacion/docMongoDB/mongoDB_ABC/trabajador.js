var coneccionDB = require('./conexion.js');
var mongoose = coneccionDB.mongoose;

var mSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: {
    type: Number,
    required: true
  },
  nombre: String,
  sueldo: Number,
  dpi: String,
  password_2: String
});
var coleccion = mongoose.model('mesa', mSchema);

function insertar(id, nombre, sueldo,dpi,password_2, callback) {
  var nuevoColeccion = new coleccion({
    _id: new mongoose.Types.ObjectId(),
    id:id,
    nombre:nombre,
    sueldo:sueldo,
    dpi:dpi,
    password_2:password_2
  });

  nuevoColeccion.save(callback);
}

module.exports.insertar = insertar;
