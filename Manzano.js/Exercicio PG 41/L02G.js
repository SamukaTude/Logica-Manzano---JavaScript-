alert("Lê quatro números e verifica quais são divisíveis simultaneamente por 2 e 3.")

numero1 = parseInt(prompt("Digite o primeiro número: "))
numero2 = parseInt(prompt("Digite o segundo número: "))
numero3 = parseInt(prompt("Digite o terceiro número: "))
numero4 = parseInt(prompt("Digite o quarto número: "))

if (numero1 % 2 === 0 && numero1 % 3 === 0) {
    alert(numero1 + " é divisível por 2 e 3")
}

if (numero2 % 2 === 0 && numero2 % 3 === 0) {
    alert(numero2 + " é divisível por 2 e 3")
}

if (numero3 % 2 === 0 && numero3 % 3 === 0) {
    alert(numero3 + " é divisível por 2 e 3")
}

if (numero4 % 2 === 0 && numero4 % 3 === 0) {
    alert(numero4 + " é divisível por 2 e 3")
}