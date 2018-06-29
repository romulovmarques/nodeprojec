var app = require('./config/server');

var rotanoticias = require('./app/routes/noticias');



app.listen(3000, function(){
	console.log('Servidor ok');
});