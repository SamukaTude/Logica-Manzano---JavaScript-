alert("Calcula a potência de uma base qualquer elevada a um expoente qualquer, sem utilizar o operador de exponenciação")

base = parseFloat(prompt("Digite a base: "))
expoente = parseInt(prompt("Digite o expoente: "))

potencia = 1

for (i = 1; i <= expoente; i++) {
    potencia = potencia * base
}

alert("Resultado: " + potencia)