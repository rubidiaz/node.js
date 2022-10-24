'use strict'
const express = require('express');
const api = express.Router();
const{ body } = require('express-validator');

let WelcomeController = require('../controllers/welcome');
let ProfesorController = require('../controllers/profesores');
let AuthController = require('../controllers/auth');

let userProtectUrl = require('../middlewares/authUser').userProtectUrl;

api.get('/', WelcomeController.welcome);
api.get('/profesor', ProfesorController.profesores);
api.get('/profesor/:n_lista', ProfesorController.profesor);
api.post('/profesor', userProtectUrl, [
    body('n_cuenta').not().isEmpty(),
    body('nombre').not().isEmpty(),
    body('edad').not().isEmpty(),
    body('genero').not().isEmpty(),
    body('especialidad').not().isEmpty()
], ProfesorController.crear_profesor); 

api.put('/profesor/:n_lista', [
    body('nombre').not().isEmpty(),
    body('edad').not().isEmpty(),
    body('genero').not().isEmpty(),
    body('especialidad').not().isEmpty()
], ProfesorController.update_profesor);

api.delete('/profesor/:n_lista', ProfesorController.delete_profesor);

api.post("/login", [
    body('mail').not().isEmpty(),
    body('pass').not().isEmpty()
], AuthController.login);
api.post("/logout", userProtectUrl, AuthController.logout);


module.exports = api;
