/**
 * CRUD com base de dados simulada (crud-server.js)
 * 
 * Use o Postman para testar:
 * - inserir: localhost:3003/produto [post] (passando o produto no body)
 * - listar:  localhost:3003/produtos [get]
 * - detalhe: localhost:3003/produto/1
 * - excluir: localhost:3003/produto/1 [delete] 
 * - alterar: localhost:3003/produto/1 [put] (passando o produto no body) 
 */

const port = 3003
const express = require('express')
const bodyParser = require('body-parser')
const dados = require('./crud-data')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// listar
app.get('/produtos', (req, res) => {
    res.send(dados.getProducts())
});

// exibe 1 produto com base no id
app.get('/produto/:id', (req, res) => {
    res.send(dados.getProduct(req.params.id))
});

// inserir
app.post('/produto', (req, res) => {
    const name = req.body.name || 'sem nome'
    const price = req.body.price || 0
    const produto  = dados.saveProduct({ name, price })
    res.send(produto)
})

// alterar
app.put('/produto/:id', (req, res) => {
    const id = req.params.id
    const name = req.body.name || 'sem nome'
    const price = req.body.price || 0
    const produto  = dados.saveProduct({ id, name, price })
    res.send(produto)
})

// excluir
app.delete('/produto/:id', (req, res) => {
    let removed = dados.deleteProduct(req.params.id)
    res.send({removed});
})

app.listen(port, _ => console.log(`Servidor executando na porta ${port}.`));