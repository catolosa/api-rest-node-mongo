const mongoose = require('mongoose');

const libroSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Libro', libroSchema);