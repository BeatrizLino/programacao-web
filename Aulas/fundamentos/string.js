const instituto = "IFCC"

console.log(instituto.charAt(2))
console.log(instituto.charAt(4))
console.log (instituto.charCodeAt(2))

console.log(instituto.indexOf("E"))

console.log(instituto.substring(1))
// o segundo parâmetro é a posição de parada, Não será impresso!!
console.log(instituto.substring(0, 2))

console.log("Instituto ".concat(instituto).concat("!"))
console.log("Instituto "+ instituto + "!")

console.log(instituto.replace("CC", "CE"))

console.log("Dennis,Cesar,Abrahao,Bia".split(","))