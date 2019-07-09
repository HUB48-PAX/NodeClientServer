var http = require('http');

let info = {
	data: 999
};

var interval = setInterval( function( caption ) {
	info.data--;
	console.log( caption + info.data );
}, 1000, "Value" );


//create a server object:
http.createServer( function ( req, res ) {

	// Website you wish to allow to connect
	res.setHeader( 'Access-Control-Allow-Origin', '*' );

	// Request methods you wish to allow
	res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' );

	// Request headers you wish to allow
	res.setHeader( 'Access-Control-Allow-Headers', 'X-Requested-With,content-type' );

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader( 'Access-Control-Allow-Credentials', true );
	//let info = new Object();

	//res.write(JSON.parse(info)); //write a response to the client
	res.write( JSON.stringify( info ) );
	res.end(); //end the response

}).listen( 8080 ); //the server object listens on port 8080