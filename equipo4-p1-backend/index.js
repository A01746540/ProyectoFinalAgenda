const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const agendaUserRoutes = require('./routes/agendaUser');
const agendaTaskRoutes = require('./routes/agendaTask');

app.use(cors({ origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/AgendaUser", agendaUserRoutes);
app.use("/AgendaTask", agendaTaskRoutes);


/*app.get("/index", (req, res) => {
    res.send("Hello World");
});*/

mongoose.connect('mongodb://user4:root@18.234.222.26:27017/base4?authSource=admin')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error: ', err))

app.listen(8084, () => {
    console.log("Servidor el linea port el puerto 8084");
});


// '18.234.222.26'
// 27017
// mongosh --host 18.234.222.26 --port 27017 --username root --authenticationDatabase admin
// root
// use base4
// show collections
// db.createCollection("pokemons")
// db.pokemons.find({})
// db.collection4.insertOne({name: "Pikachu", type: "Electric"})