// Imposta a Model Lista de compras
const ListaDeCompras = require('./listaDeCompras')

// Cria um array com metodos disposniveis
ListaDeCompras.methods(['get','post', 'put', 'delete'])
// Ajusta para sempre retornar o objeto alterado no update e aplicar as regras de validação
ListaDeCompras.updateOptions({new: true, runValidators: true})

module.exports = ListaDeCompras