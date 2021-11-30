const mongoose = require('mongoose')

// Definición del esquema de la colección
const AgendaUser = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    birthdate: {
        type: Date,
        required: false
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AgendaTask',
    }, ],
}, { collection: 'AgendaUser' });

// Creando el modelo de la colección
module.exports = mongoose.model('AgendaUser', AgendaUser)