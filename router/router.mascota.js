const express = require('express');
const router = express.Router();

const Mascota = require('../models/model.mascota');

router.get( '/', async (req,res) => {
	try{

		const arrayMascotasDB = await Mascota.find();
		//console.log(arrayMascotasDB);
		 res.render( 'mascota/main', {
			arrayMascotas:arrayMascotasDB
		} );

	} catch(error){
		console.log(error);
	}
});


router.get( '/crear', (req, res) => {
	res.render( 'mascota/crear' )
} )


router.post( '/', async (req, res) => {
	const body = req.body;
   try{
		//const mascotaDB = new Mascota( body );
		//await mascotaDB.save();
		await Mascota.create( body )
		res.redirect( 'mascota/main' );

	} catch(error){
		console.log(error);
	}


})

router.put( '/:id', async (req,res) => {
	const id = req.params.id;
	const body = req.body;

	try{

	   const mascotaDB = await Mascota.findByIdAndUpdate( id, body, {useFindAndModify: false} );
	   console.log(mascotaDB);
	   res.json({
	   		estado: true,
	   		mensaje: 'Editado'
	   })

	} catch(error){
		console.log(error);
		 res.json({
	   		estado: false,
	   		mensaje: 'no Editado!!'
	   })
	}
} );


router.delete( '/:id', async (req,res) => {
	const id = req.params.id;

	try{

	   const mascotaDB = await Mascota.findByIdAndDelete( { _id: id } );
	   console.log(mascotaDB);
	   res.json({
	   		estado: true,
	   		mensaje: 'Editado'
	   })

	} catch(error){
		console.log(error);
		 res.json({
	   		estado: false,
	   		mensaje: 'no Editado!!'
	   })
	}
} );

router.get( '/:id', async (req,res) => {
	const id = req.params.id;
	try{

	   const mascotaDB = await Mascota.findOne( { _id: id } );
	   //console.log(mascotaDB);
	   res.render( 'mascota/modificar', { mascota: mascotaDB, error: false } );

	} catch(error){
		console.log(error);
		res.render( 'mascota/modificar', { error: true, mensaje: 'no existe el id'} );
	}
});

module.exports = router;