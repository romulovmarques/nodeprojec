var mysql = require('mysql');

var connMySql = function(){
    console.log('a conexao com banco de dados foi estabelecida')
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Aa1234',
        database : 'portal_noticias'
});
}
module.exports = function(){
    console.log('o autoload carregou o modulo de conexao')
    return connMySql;
}    