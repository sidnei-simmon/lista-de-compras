// Importa o Servidor configurado
const server = require('./config/server')
// Importa o modulo de conexão com banco
require('./config/database')
// Importa as rotas
require('./config/routes')(server)