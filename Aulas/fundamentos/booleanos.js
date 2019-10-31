let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)


console.log("Casos verdadeiros")
console.log(!!2)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Bia spoiler')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Casos falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log("Mais alguns testes.....")

console.log(!!('' || null || 0 || " "))

let nome = "cesinha"
console.log(nome || "Desconhecido")
