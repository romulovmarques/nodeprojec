var http=require('http');

var server = http.createServer( function (req, res){


	var categoria = req.url
	if( categoria == '/tecnlogia'){
		res.end("<html><body>Noticias de tecnlogia</body></html>");
	} else if ( categoria == '/moda'){
		res.end("<html><body>Noticias de moda</body></html>");
	} else if ( categoria == '/beleza'){
		res.end("<html><body>Noticias de beleza</body></html>");
	} else {
		res.end("<html><body>Portal de Noticias</body></html>");
	}
	

});

server.listen(3000);