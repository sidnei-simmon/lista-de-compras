// Importa o modulo de ResFul Node
const restFul = require('node-restful')
// Importa o modulo mongoose para validar o Schema
const mongoose = restFul.mongoose

// Cria o Schema de validação
const listaDeComprasSchema = new mongoose.Schema({
    product: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        default: 0.00,
        require: true
    },
    description:{
        type: String,
        require: false
    },
    creatAt: {
        type: Date,
        default: Date.now
    }
})

// Exporta a model
module.exports = restFul.model('ListaDeCompras', listaDeComprasSchema)
