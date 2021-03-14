const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res ) => {
	console.log(__dirname);
	res.render( 'index', { titulo: 'Home de la Veterinaria'} );
} )


router.get( '/servicios', (req,res) => {
	// res.send( 'Mi pagina de servicios');
	res.render( 'servicio', {titulo:'Mi titulo Servicio dinamico'} );
})

module.exports = router;