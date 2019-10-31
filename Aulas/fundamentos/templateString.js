const nome = "Dennis"

const concatenacao = "Olá, " + nome + "!"

const template = `
Olá, 
${nome}!
`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1+1}`)
 
//Arrow Function
const up = texto => texto.toUpperCase()

//Função convencional
function upConvencional(texto){
    return texto.toUpperCase()
}

console.log(`Ei......... ${up('Cuidado')}!`)