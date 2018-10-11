'use strict'

const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'))

const path = require("path")

const api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api)

module.exports = app;