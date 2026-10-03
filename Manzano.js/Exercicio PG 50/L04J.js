alert("Calcula o resultado inteiro da divisão de dois números sem utilizar o operador DIV")

dividendo = parseInt(prompt("Digite o dividendo: "))
divisor = parseInt(prompt("Digite o divisor: "))

while (divisor == 0) {
    divisor = parseInt(prompt("O divisor não pode ser zero. Digite outro divisor: "))
}

quociente = 0
resto = dividendo

while (resto >= divisor) {
    resto = resto - divisor
    quociente = quociente + 1
}

alert("Quociente: " + quociente)