alert("Lê o nome e o sexo da pessoa e apresenta uma saudação correspondente.")

nome = prompt("Digite seu nome: ")
let sexo = prompt("Digite seu sexo (M/F): ")

if (sexo.toUpperCase() === "M") {
    alert("Ilmo Sr. " + nome)
} else if (sexo.toUpperCase() === "F") {
    alert("Ilma Sra. " + nome)
}