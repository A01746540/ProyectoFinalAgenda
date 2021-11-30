const AgendaTaskModel = require('../models/AgendaTask');
const mongoose = require('mongoose')

exports.postAddTask = async(req, res) => {
    const Task = new AgendaTaskModel(req.body);
    Task._id = new mongoose.Types.ObjectId();
    AgendaTaskModel.findOne({ identificador: Task.identificador })
        .then((task) => {
            if (task) {
                console.log('La tarea ', Task.numero, 'ya existe')
                res.json({ status: 'error', message: 'La tarea ya existe' })
            } else {
                Task.save()
                    .then(() => {
                        console.log('Tarea guardada')
                        res.json({ status: 'OK', message: 'Tarea creada' })
                    })
                    .catch(err => {
                        console.log("Error al guardar la tarea")
                        console.log(err)
                        res.json({ status: 'error', message: 'Error al crear la tarea' })
                    })
            }
        })
        .catch((err) => {
            console.log('Error: ', err)
            res.json({ status: 'error', message: 'Error al crear la tarea' })
        })
}

exports.getTasks = async(req, res) => {
    AgendaTaskModel.find()
        .then((tasks) => {
            if (tasks.length > 0) {
                console.log('Tareas: ', tasks)
                res.json(tasks)
            } else {
                console.log('No hay tareas')
                res.json({ status: 'error', message: 'No hay tareas' })
            }
        })
        .catch((err) => {
            console.log('Error: ', err)
            res.json({ status: 'error', message: 'Error al listar las tareas' })
        })
}

exports.getTaskByCategory = async(req, res) => {
    const Task = new AgendaTaskModel(req.body);
    AgendaTaskModel.find({ categoria: Task.categoria })
        .then((task) => {
            if (task) {
                console.log('Tareas para la categoría ', Task.categoria, ': ', task)
                res.json(task)
            } else {
                console.log('No hay tareas')
                res.json({ status: 'error', message: 'No hay tareas' })
            }
        })
        .catch((err) => {
            console.log('Error: ', err)
            res.json({ status: 'error', message: 'Error al listar las tareas' })
        })
}

exports.getTask = async(req, res) => {
    const Task = new AgendaTaskModel(req.body);
    AgendaTaskModel.findOne({ titulo: Task.titulo })
        .then((task) => {
            if (task) {
                console.log('Tarea: ', task)
                res.json(task)
            } else {
                console.log('No hay tarea')
                res.json({ status: 'error', message: 'No hay tarea' })
            }
        })
        .catch((err) => {
            console.log('Error: ', err)
            res.json({ status: 'error', message: 'Error al listar la tarea' })
        })
}

exports.postUpdateTask = async(req, res) => {
    const Task = new AgendaTaskModel(req.body);
    AgendaTaskModel.findOneAndUpdate({ identificador: Task.identificador })
        .then((task) => {
            if (task) {
                console.log('Tarea actualizada: ', task)
                res.json(task)
            } else {
                console.log('No se pudo actualizar la tarea')
                res.json({ status: 'error', message: 'No hay tarea' })
            }
        })
        .catch((err) => {
            console.log('Error: ', err)
            res.json({ status: 'error', message: 'Error al listar la tarea' })
        })
}

exports.postDeleteTask = async(req, res) => {
    const Task = new AgendaTaskModel(req.body);
    AgendaTaskModel.findOneAndDelete({ identificador: Task.identificador })
        .then((task) => {
            if (task) {
                console.log('Tarea eliminada: ', task)
                res.json(task)
            } else {
                console.log('No se pudo eliminar la tarea')
                res.json({ status: 'error', message: 'No hay tarea' })
            }
        })
        .catch((err) => {
            console.log('Error: ', err)
            res.json({ status: 'error', message: 'Error al listar la tarea' })
        })
}