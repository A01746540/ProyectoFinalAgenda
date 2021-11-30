const mongoose = require('mongoose')

// Definición del esquema de la colección
const AgendaTask = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    identificador: {
        type: String,
        required: false
    },
    categoria: {
        type: String,
        required: false
    },
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    },
    fecha_creacion: {
        type: Date,
        required: false
    },
    fecha_inicio: {
        type: Date,
        required: false
    },
    fecha_termino: {
        type: Date,
        required: false
    }
}, { collection: 'AgendaTask' });

// Creando el modelo de la colección
module.exports = mongoose.model('AgendaTask', AgendaTask)