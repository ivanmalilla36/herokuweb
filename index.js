'use strict'

const mongoose = require('mongoose');
const port = process.env.PORT || 3678;

mongoose.connect('mongodb://egghunt3r:egghunt3r1994@ds223653.mlab.com:23653/cursofavoritos',(err,res)=>{
	console.log("base de datos iniciada")

	if (err) {
		// throw err;
		console.log("Este es un error")
	}
	else{
		app.listen(port, () => {
		console.log(`API RES FAVORITOS funcionando en en http://localhost:${port}`);
	});
	}

})

const app = require('./app');