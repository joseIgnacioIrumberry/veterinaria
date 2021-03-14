const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
	nombre: String,
	descripcion: String
});

const Mascota = new mongoose.model( 'Mascota', mascotaSchema);

module.exports = Mascota;