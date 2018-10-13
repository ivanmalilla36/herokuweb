'use strict'

const express = require('express')
const FavoritoController = require('../controllers/favorito')

const api = express.Router()


api.get('/saludar/:nombre?/:apellido?', FavoritoController.prueba);

api.get('/favorito/:id', FavoritoController.getFavorito)

api.post('/favorito', FavoritoController.saveFavorito)

api.put('/favorito/:id', FavoritoController.updateFavorito)

api.get('/deleteFavorito/:id?', FavoritoController.deleteFavorito)

api.get('/favoritos', FavoritoController.getFavoritos)

api.get('/newfavorito', FavoritoController.newFavorito)

api.get('/FavoritosMobile', FavoritoController.FavoritosMobile)

module.exports = api;