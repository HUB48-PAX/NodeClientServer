var http = require('http');
const server = http.createServer( function( request, response ) {
	console.dir( request.param )

	// Website you wish to allow to connect
	response.setHeader( 'Access-Control-Allow-Origin', '*' );

	// Request methods you wish to allow
	response.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' );

	// Request headers you wish to allow
	response.setHeader( 'Access-Control-Allow-Headers', 'X-Requested-With,content-type' );

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	response.setHeader( 'Access-Control-Allow-Credentials', true );


	if ( request.method == 'POST' ) {
		console.log( 'POST' );
		var body = '';
		request.on( 'data', function( data ) {
			body += data;
			console.log( 'Partial body: ' + body );
		});
		request.on( 'end', function() {
			console.log( 'Body: ' + body );
			response.writeHead( 200, {'Content-Type': 'text/html'} );
			response.end( 'post received' );
		});
	} else {
		console.log('GET');
		//fallback
		var html = `
			<html>
				<body>
					<form method="post" action="http://localhost:8080">Name: 
						<input type="text" name="name" />
						<input type="submit" value="Submit" />
					</form>
				</body>
			</html>`;
		response.writeHead( 200, {'Content-Type': 'text/html'} );
		response.end( html );
	};
});

const port = 8080;
const host = 'locahost';
server.listen( port );
console.log( `Listening at http://${host}:${port}` );