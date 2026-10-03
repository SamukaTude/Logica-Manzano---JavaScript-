alert("Lê valores positivos até que um número negativo seja informado e apresenta o maior e o menor valor")

numero = parseInt(prompt("Digite um valor positivo ou negativo para encerrar: "))

if (numero >= 0) {
    maior = numero
    menor = numero

    while (numero >= 0) {
        if (numero > maior) {
            maior = numero
        }

        if (numero < menor) {
            menor = numero
        }

        numero = parseInt(prompt("Digite outro valor positivo ou negativo para encerrar: "))
    }

    alert("Maior valor: " + maior + "\nMenor valor: " + menor)
} else {
    alert("Nenhum valor positivo foi informado")
}