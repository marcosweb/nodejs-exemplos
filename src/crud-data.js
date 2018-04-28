const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function saveProduct(produto) {
    if (!produto.id) {
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}

function getProduct(id) {
    return produtos[id] || {}
}

function getProducts() {
    return Object.values(produtos)
}

function deleteProduct(id) {
    let ret = 0
    if (produtos[id]) {
        delete(produtos[id])
        ret = 1
    }
    return ret
}

module.exports = { saveProduct, getProduct, getProducts, deleteProduct }