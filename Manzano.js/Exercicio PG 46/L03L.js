alert("Lê valores inteiros positivos até que um valor negativo seja informado e apresenta o maior e o menor valor")

numero = parseInt(prompt("Digite um valor positivo: "))

maior = numero
menor = numero

while (numero >= 0) {
    if (numero > maior) {
        maior = numero
    }

    if (numero < menor) {
        menor = numero
    }

    numero = parseInt(prompt("Digite outro valor positivo ou um valor negativo para encerrar: "))
}

alert("Maior valor: " + maior + "\nMenor valor: " + menor)