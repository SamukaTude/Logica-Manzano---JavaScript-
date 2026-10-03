alert("Lê três valores e apresenta os números em ordem crescente.")

a = parseFloat(prompt("Digite o valor de A: "))
b = parseFloat(prompt("Digite o valor de B: "))
c = parseFloat(prompt("Digite o valor de C: "))

let valores = [a, b, c]

valores.sort((x, y) => x - y)

alert("Ordem crescente: " + valores)