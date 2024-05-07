const express = require('express');
const mongoose = require('mongoose');

const rutaLibros = require("./routes/libro");


const app = express();
const port = process.env.PORT || 9000;

//middleware

app.use(express.json())
app.use('/api', rutaLibros);


//ROUTES
app.get('/', (req, res)=>{
    res.send("Bienvenidos a mi API");
});

//CONEXION MONGODB
mongoose.connect('mongodb://127.0.0.1:27017/apiRest')
        .then(()=> console.log('Conectado a MONGODB'))
        .catch((error)=>console.error(error));


app.listen(9000, ()=> console.log('Servidor escuchando en puerto', port));