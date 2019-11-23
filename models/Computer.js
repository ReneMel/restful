const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ComputerSchema = Schema({
    Marca: {
        type: String,
        required: true,
        unique:false
    },
    Modelo:{
        type: String, 
        required: true,
        unique: true
    },
    Memoria: String,
    precio: String,
    tipo: {
        type: String,
        required: true
    },
    Sistema_Operativo: {
        type: String,
        required: true
    },
    comp_count: Number
}, {
    timestamps: true
});

module.exports = mongoose.model("Computer", ComputerSchema);