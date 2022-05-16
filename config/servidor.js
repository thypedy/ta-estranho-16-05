//importar o pacote express
const express = require ("express")
//executar o express
const app = express()
//definir a porta para o servidor
const porta = process.env.PORT || 3030

//definir a pasta para o servidor de css e imagens
app.use(express.static('./assets'))

//exportar app e porta
module.exports = {app,porta}