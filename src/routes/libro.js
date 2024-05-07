const express = require('express');
const libroSchema = require("../models/libro");
const libro = require('../models/libro');

const router = express.Router();

// CREAR LIBRO
router.post('/libreria', (req, res)=>{
    const libro = libroSchema(req.body);
    libro
        .save()
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}));
});

// OBTENER LIBROS
router.get('/libreria', (req, res)=>{
    libroSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}));
});


// OBTENER UN LIBRO
router.get('/libreria/:id', (req, res)=>{
    const {id} = req.params;
    libroSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}));
});

// ACTUALIZAR UN LIBRO
router.put('/libreria/:id', (req, res)=>{
    const {id} = req.params;
    const {titulo, autor, año} = req.body;
    libroSchema
        .updateOne({_id: id}, {$set: {titulo, autor, año} })
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}));
});

// ELIMINAR UN LIBRO
router.delete('/libreria/:id', (req, res)=>{
    const {id} = req.params;
    libroSchema
        .remove({_id: id})
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}));
});






module.exports = router;