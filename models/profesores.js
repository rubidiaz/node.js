'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfesoresSchema = Schema({
    n_cuenta: { type: Number, require: true, unique:true},
    nombre: { type: String, require: true},
    edad: { type: Number, require: true},
    especialidad: { type: String, require: true},
    genero: { type: String, require: true}
});

module.exports = mongoose.model('profesores', ProfesoresSchema);