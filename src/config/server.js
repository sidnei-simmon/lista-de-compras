// Porta padrão livre no sistema ou default
const port = process.env.PORT || 3000

// Faz p parse de todas requisições
const bodyParser = require('body-parser')
// Inclui o Express para rotas
const express = require('express')
// inicia o servidor
const server = express()
// Importa os hosts permitidos para acesso da aplicação
const allowCors = require('./cors')

// Configura o servidor com os Middlewares
/*parse
 Especifica como os dados devem ser tratados quando enviados ao servidor
   multipart/form-data: trata os envios como parte e valida os MIMES ( tipo )
   application/x-www-form-urlencoded: trata as requisições como arquivo te texto simples
   geralmente:Nome=rafael&cidade=campinas&idade=31 e não trata os MIMES
*/
server.use(bodyParser.urlencoded({extended: true}))
// Trata a requisição como JSON
server.use(bodyParser.json())
// Seta os host permitidos
server.use(allowCors)

// Inicia o Servidor
server.listen(port, function () {
    console.log("Server listening on port " + port + " in " + server.settings.env + " mode.");
})

// Exporta o modulo do servidor pra ser usado
module.exports = server