// Importa  o Mongoose
const mongoose = require('mongoose')
// Seta a Promisse do Mongo para ser igual a do JS
mongoose.Promise = global.Promise
// Exporta o modulo e cria a conexão
const URI = 'mongodb://localhost/lista'

// Importante: Adicionar Mong Cliente para compatibulizar com as novas versões do Mongoose
mongoose.connect(URI, {useMongoClient: true})
    .then(() => console.log('Connection succesful'))
    .catch((err) => console.error(err));
