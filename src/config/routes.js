const express = require('express')

module.exports = function (server) {

    // API de rotas
    const router = express.Router()
    // Cria um Middleware 
    server.use('/api', router)

    // Lista de Compra rotas
    const listaDeComprasService = require('../api/lista-de-compras/listaDeComprasService')
    listaDeComprasService.register(router, '/lista')
}