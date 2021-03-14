const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const app = express();

// create application/x-www-form-urlencoded parser
app.use( bodyParser.urlencoded({ extended: false }) )
// create application/json parser
app.use( bodyParser.json() )


require('dotenv').config()
//require('dotenv').config({ path: '/nombre .env modificado' })

const port = process.env.PORT || 2020;





//motor de plantillas
app.set( 'view engine', 'ejs');
app.set( 'views', __dirname+'/view');

app.use( express.static( __dirname + "/public" ) )


//rutas 
app.use( '/', require( __dirname + '/router/main' ) );









app.use( ( req, res, next) => {
	//res.status(404).sendfile( __dirname + "/public/404.html" )
	res.render( '404' );
} )


app.listen( port, () => {
	console.log( 'servidor esta activo en el puerto', port );
})


// ejemplo de uso
const { frutas, dinero } = require( __dirname + '/fruta' )

frutas.forEach( item => {
	console.count(item);
} )

console.log(dinero);

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));