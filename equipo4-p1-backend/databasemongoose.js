const mongoose = require('mongoose')
mongoose.connect('mongodb://user4:root@18.234.222.26:27017/base4?authSource=admin')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error: ', err))

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
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    }
}, { collection: 'AgendaUser' });

// Creando el modelo de la colección
const AgendaUserModel = mongoose.model('AgendaUser', AgendaUser)

const User = new AgendaUserModel({
    _id: new mongoose.Types.ObjectId(),
    fullname: 'Edgar Alexis',
    username: 'edalxgoam',
    mail: 'A01746540@tec.mx',
    password: '12345',
    phone: '5535297152',
    birthdate: new Date('1999-02-26')
})

// Create User
// Creation validations
AgendaUserModel.findOne({ username: User.username })
    .then(user => {
        if (user) {
            console.log('El usuario ', User.username, 'ya existe')
        } else {
            // User can be saved
            User.save()
                .then(() => {
                    console.log('Usuaro creado')
                    console.log(User)
                })
                .catch(err => console.log('Error: ', err))
        }
    })

// Find all Users
AgendaUserModel.find()
    .then(users => {
        console.log('Lista de Usuarios')
        console.log(users)
    })
    .catch(err => console.log('Error: ', err))

// Find User by username
AgendaUserModel.findOne({ username: User.username })
    .then(user => {
        console.log('Usuario encontrado exitosamente: ')
        console.log(user)
    })
    .catch(err => console.log('Error, el usuario no fue encontrado: ', err))

// Update User by username
AgendaUserModel.findOneAndUpdate({ username: User.username }, {
    fullname: User.fullname,
    username: User.username,
    mail: User.mail,
    password: User.password,
    phone: User.phone,
    birthdate: User.birthdate
})

async function updateUser() {
    try {
        const user = await AgendaUserModel.findOneAndUpdate({ username: User.username }, {
            fullname: User.fullname,
            username: User.username,
            mail: User.mail,
            password: User.password,
            phone: User.phone,
            birthdate: User.birthdate
        })
        console.log('Usuario actualizado exitosamente: ')
        console.log(user)
    } catch (err) {
        console.log('Error, el usuario no fue actualizado: ', err)
    }
}

// Delete User by username
AgendaUserModel.findOneAndDelete({ username: User.username })
    .then(user => {
        console.log('Usuario eliminado exitosamente: ')
        console.log(user)
    })
    .catch(err => console.log('Error, el usuario no fue eliminado: ', err))