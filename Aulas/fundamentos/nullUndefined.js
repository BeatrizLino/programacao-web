let valor
console.log(valor)

valor = null
//console.log(valor.toString())//Erro!
console.log(valor)


const produto = {}

//console.log(produto.preco.valor)//Erro!
console.log(produto)
console.log(produto.preco)
console.log(produto.preco = valor)

produto.preco = 3.50
console.log(produto)
produto.preco = undefined
console.log(!!produto.preco)
