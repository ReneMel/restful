const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    Marca: {
        type: String,
        required: true,
        unique:false
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

module.exports = mongoose.model("User", UserSchema);