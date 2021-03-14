const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res ) => {
	console.log(__dirname);
	res.render( 'index', { titulo: 'Home de la Veterinaria'} );
} )


module.exports = router;