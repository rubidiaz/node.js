'use strict'

var controller = {

    welcome: function(req, res){
        console.log("get ejecutando en raiz");
        res.send("Mi primer debug");
    }/*,

    alumnos: function(req,res){
        res.send("Mi listado de alumnos");
    },

    alumno: function(req, res){
        let cal1 = 10;
        let cal2 = 8;
        let cal3 = 8;

        let final = (cal1 + cal2 + cal3) / 3;

        console.log(final);

        res.send("la calificacion final es : "+final);
    },

    crear_alumno: (req, res) => {
        
        let user_info = req.body;

        console.log(user_info);
        // res.send("Creamos un alumno");
        return res.status(200).json({
            status: 200,
            nombre_de_alumno: user_info.nombre + " " + user_info.apellido,
            edad: user_info.edad
        })
    },

    actualizar : (req, res) => {
        res.send("Actualizamos un alumno");
    },

    eliminar: (req, res) => {
        res.send("Eliminamos un alumno");
    }*/
}

module.exports = controller;