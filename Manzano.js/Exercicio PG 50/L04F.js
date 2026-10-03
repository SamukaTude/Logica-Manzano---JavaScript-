alert("Lê valores positivos até que um número negativo seja informado e apresenta a soma, a média e a quantidade de valores lidos")

soma = 0
quantidade = 0

numero = parseFloat(prompt("Digite um valor positivo ou negativo para encerrar: "))

while (numero >= 0) {
    soma = soma + numero
    quantidade = quantidade + 1

    numero = parseFloat(prompt("Digite outro valor positivo ou negativo para encerrar: "))
}

if (quantidade > 0) {
    media = soma / quantidade

    alert("Somatório: " + soma + "\nMédia: " + media + "\nQuantidade de valores: " + quantidade)
} else {
    alert("Nenhum valor positivo foi informado")
}