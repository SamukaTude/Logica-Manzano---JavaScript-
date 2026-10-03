alert("Apresenta a tabuada de multiplicação de um número qualquer de 1 até 10")

numero = parseInt(prompt("Digite um número: "))

resultado = ""

for (i = 1; i <= 10; i++) {
    resultado = resultado + numero + " x " + i + " = " + (numero * i) + "\n"
}

alert(resultado)