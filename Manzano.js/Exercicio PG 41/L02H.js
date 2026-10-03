alert("Lê cinco números e identifica o maior e o menor valor.")

n1 = parseInt(prompt("Digite o primeiro número: "))
n2 = parseInt(prompt("Digite o segundo número: "))
n3 = parseInt(prompt("Digite o terceiro número: "))
n4 = parseInt(prompt("Digite o quarto número: "))
n5 = parseInt(prompt("Digite o quinto número: "))

numeros = [n1, n2, n3, n4, n5]

maior = Math.max(...numeros)
menor = Math.min(...numeros)

alert("Maior valor: " + maior + "\nMenor valor: " + menor)