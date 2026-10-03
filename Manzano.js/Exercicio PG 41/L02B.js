alert("Lê um número e, caso seja negativo, transforma-o em positivo.")

numero = parseInt(prompt("Digite um número: "))

if (numero < 0) {
    numero = numero * -1
}

alert("Valor positivo: " + numero)