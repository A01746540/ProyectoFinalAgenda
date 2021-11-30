const AgendaUserModel = require('../models/AgendaUser');
const mongoose = require('mongoose')

// Create User
// Creation validations
exports.postAgregarUsuario = async(req, res) => {
    const User = new AgendaUserModel(req.body);
    User._id = new mongoose.Types.ObjectId();
    AgendaUserModel.findOne({ username: User.username })
        .then(user => {
            if (user) {
                console.log('El usuario ', User.username, 'ya existe')
                res.json({ status: 'error', message: 'El usuario ya existe' })
            } else {
                // User can be saved
                User.save()
                    .then(() => {
                        console.log('Usuaro creado')
                        console.log(User)
                        res.json({ status: 'success', message: 'Usuario creado' })
                    })
                    .catch(err => {
                        console.log('Error: ', err)
                        res.json({ status: 'error', message: 'Error al crear usuario' })
                    })
            }
        })
        .catch(err => {
            console.log('Error al conectarse con los usuarios: ', err)
            res.json({ status: 'error', message: 'Error al conectarse con los usuarios' })
        })
}

// Find all Users
exports.getUsuarios = async(req, res) => {
    AgendaUserModel.find()
        .then(users => {
            console.log('Lista de Usuarios')
            console.log(users)
            res.json(users)
        })
        .catch(err => {
            console.log('Error: ', err)
            res.json('Error al conectarse con los usuarios')
        })
}

// Find User by username
exports.getUsuario = async(req, res) => {
    const User = new AgendaUserModel(req.body);
    AgendaUserModel.findOne({ username: User.username })
        .then(user => {
            console.log('Usuario encontrado exitosamente: ')
            console.log(user)
            res.json(user)
        })
        .catch(err => {
            console.log('Error, el usuario no fue encontrado: ', err)
            res.json('Error, el usuario no fue encontrado')
        })
}

// Update User by username
exports.postUpdateUsuario = async(req, res) => {
    const User = new AgendaUserModel(req.body);
    AgendaUserModel.findOneAndUpdate({ username: User.username }, {
            fullname: User.fullname,
            username: User.username,
            mail: User.mail,
            password: User.password,
            phone: User.phone,
            birthdate: User.birthdate
        })
        .then(user => {
            console.log('Usuario actualizado exitosamente: ')
            console.log(user)
            res.json(user)
        })
        .catch(err => {
            console.log('Error, el usuario no fue actualizado: ', err)
            res.json('Error, el usuario no fue actualizado')
        })
}

exports.postUpdateUsuarioAsync = async(req, res) => {
    const User = new AgendaUserModel(req.body);
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
        res.json(user)
    } catch (err) {
        console.log('Error, el usuario no fue actualizado: ', err)
        res.json('Error, el usuario no fue actualizado')
    }
}

// Delete User by username
exports.postDeleteUsuario = async(req, res) => {
    const User = new AgendaUserModel(req.body);
    AgendaUserModel.findOneAndDelete({ username: User.username })
        .then(user => {
            console.log('Usuario eliminado exitosamente: ')
            console.log(user)
            res.json(user)
        })
        .catch(err => {
            console.log('Error, el usuario no fue eliminado: ', err)
            res.json('Error, el usuario no fue eliminado')
        })
}