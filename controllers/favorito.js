'use strict'

const Favorito = require('../models/favorito')

function prueba (req, res)  {
	console.log("ya hizo la peticion: saludar")

	const nombres = req.params.nombre;
	const apellidos = req.params.apellido; 

	res.send(`nombre ${nombres} apellido ${apellidos}`);
}

function getFavorito(req,res){

	const favoritoID = req.params.id

	Favorito.findById(favoritoID, function(err,favorito){
		if (err) {
			res.status(500).send("Error al devolver marcador")
		}else {
		res.status(200).send({data: favorito})
		}
	})
}

function getFavoritos(req,res){
Favorito.find({}, {_id:0 ,__v: 0}).sort({ title : 1}).exec(function(err, favoritos){ 
		if (err) {
			throw err;
			res.status(500).send("error")
		}
		if(!favoritos){
			res.status(404).send("no ahi marcadores")
		}
		// res.status(200).send({favoritos})
		res.render('index.pug', {favoritos:favoritos, title: "mis favoritos"})
	});

	

}

function saveFavorito(req,res){
	const favorito = new Favorito()
	const params = req.body

	favorito.title = params.title
	favorito.description = params.description
	favorito.url = params.url

	favorito.save((err,favoritoStored) => {
		if (err) {
			throw err;
			res.send({message: "No se pudo guardar el registro"})
		}
		else {
			// res.send({message:favoritoStored})
			res.redirect("/api/favoritos")
		}
	})
}

function updateFavorito(req,res){
	const params = req.body
	const favoritoID = req.params.id

	Favorito.findByIdAndUpdate(favoritoID, params, function (err, favoritoUpdated){
		if (err) {
			res.status(500).send("error en el servidor")
		}
		else {
			res.status(200).send({data: favoritoUpdated})
		}
	})	
}

function deleteFavorito(req,res){
	const favoritoID = req.params.id
	Favorito.findOneAndRemove(favoritoID, function(err,favoritoRemoved){
		if (err) {
			res.status(500).send("error en el servidor")
		}
		else{
			res.send({data: favoritoRemoved})
		}
	})
}

function newFavorito(req,res){
	res.render('new.pug', {title: "nuevo favorito"})
}

module.exports = {
	prueba,
	getFavorito,
	saveFavorito,
	updateFavorito,
	deleteFavorito,
	getFavoritos,
	newFavorito
}