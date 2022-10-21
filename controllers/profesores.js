'use strict'

const { validationResult } = require('express-validator');

let profesores = require('../models/profesores');

let controller = {
    profesores: function(req, res){
        
        profesores.find({}).exec( (err, profesores) => {
            if(err) return res.status(500).json({status: 500,mensaje: err,});
            if(!profesores) return res.status(200).json({status: 200,mensaje: "No hay profesores por listar"});
            
            return res.status(200).json({
                status: 200,
                data: profesores
            });
        
        });
        
    }, 
    profesores: function(req, res){
        
       let n_lista = req.params.n_lista; 
          
        profesores.findOne({n_cuenta: n_lista}).exec( (err, profesores) => {
            if(err) return res.status(500).json({status: 500,mensaje: err,});
            if(!profesores) return res.status(200).json({status: 200,mensaje: "No se encontró el profesor"});
            
            return res.status(200).json({
                status: 200,
                data: profesores
            });
        
        });
        
    },

    crear_profesor: function(req, res){
    
        //Validamos los datos que se envian al endpoint
           
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        let user_info = req.body;

        Profesores.findOne({n_cuenta: user_info.n_cuenta}).exec( (err, profesor) => {
            if(err) return res.status(500).json({status: 500,mensaje: err,});
            if(profesor) return res.status(200).json({status: 200,mensaje: "El numero de cuenta ya existe"});
            
            let profesores_model = new Profesores();

            profesores_model.n_cuenta = user_info.n_cuenta;
            profesores_model.nombre = user_info.nombre;
            profesores_model.edad = user_info.edad;
            profesores_model.especialidad = user_info.especialidad;
            profesores_model.genero = user_info.genero;

            profesores_model.save((err, profesoresStored) => {
                if(err) return res.status(500).json({status: 500,mensaje: err,});
                if(!profesoresStored) return res.status(200).json({status: 200,mensaje: "No logró almacenar al profesor"});
            });

            return res.status(200).json({
                status: 200,
                menssage: "Usuario almacenado."
            });
            
        });
    },

    update_profesor: function(req, res) {

        //Validamos los datos que se envian al endpoint
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        let n_lista = req.params.n_lista; 
        let user_info = req.body;

        // console.log(user_info); 

        let profesor_info_update = {
            nombre: user_info.nombre,
            edad: user_info.edad,
            genero: user_info.genero,
            especialidad: user_info.especialidad
        };

        profesores.findOneAndUpdate({n_cuenta: n_lista}, profesor_info_update, {new:true}, (err, profesorUpdate) =>{
            if(err) return res.status(500).json({message: 'Error al actualizar.'});
            if(!profesorUpdate) return res.status(404).json({message: 'No existe el profesor.'});

            return res.status(200).json({
                nombre: profesorUpdate.nombre,
                edad: profesorUpdate.edad,
                genero: profesorUpdate.genero,
                especialidad: profesorUpdate.especialidad
            });
        });
     },

    delete_profesor: function(req, res) {
        
        let n_lista = req.params.n_lista; 

        profesores.findOneAndRemove({n_cuenta: n_lista}, (err, profesorDelete) => {
            if(err) return res.status(500).json({message: 'Error al eliminar.'});
            if(!profesorDelete) return res.status(404).json({message: 'No existe el profesor.'});

            return res.status(200).json({
                message: 'Usuario Eliminado.'
            });

        });
    }    


};
module.exports = controller;