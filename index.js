/*'use strict'
const express = require('express');
const app = express();
const port = 3700;

app.get("/", (req, res) => {
    console.log("get ejecutando en raiz");
    res.send("Mi primer debug");
});

app.get("/alumnos", (req, res) => {
    res.send("Mi listado de alumnos");
});

app.get("/alumno", (req, res) => {
    res.send("El detalle de un alumno");
});

app.post("/alumno", (req, res) => {
    res.send("Creamos un alumno");
});

app.put("/alumno", (req, res) => {
    res.send("Actualizamos un alumno");
});

app.delete("/alumno", (req, res) => {
    res.send("Eliminamos un alumno");
});

app.get("/", (req, res) => {
    console.log("get ejecutando en raiz");
    res.send("Mi primer debug");
});

app.listen(port, ()=>{
    console.log("Servidor de ejemplo ejecuitando en "+port);
});*/