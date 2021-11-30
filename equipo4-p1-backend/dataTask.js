const mongoose = require('mongoose')
mongoose.connect('mongodb://user4:root@18.234.222.26:27017/base4?authSource=admin')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error: ', err))

const AgendaTask = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    identificador: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha_creacion: {
        type: Date,
        required: true
    },
    fecha_inicio: {
        type: Date,
        required: true
    },
    fecha_termino: {
        type: Date,
        required: true
    }
}, { collection: 'AgendaTask' });

// Creando el modelo de la colección
const AgendaUserModel = mongoose.model('AgendaTask', AgendaTask)

const User = new AgendaUserModel({
    _id: new mongoose.Types.ObjectId(),
    fullname: 'Edgar Alexis',
    username: 'edalxgoam',
    mail: 'A01746540@tec.mx',
    password: '12345',
    phone: '5535297152',
    birthdate: new Date('1999-02-26')
})