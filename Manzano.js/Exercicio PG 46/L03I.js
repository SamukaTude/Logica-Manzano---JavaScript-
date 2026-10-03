alert("Lê 10 valores numéricos e apresenta o somatório e a média aritmética")

soma = 0

for (i = 1; i <= 10; i++) {
    numero = parseFloat(prompt("Digite o " + i + "º valor: "))
    soma = soma + numero
}

media = soma / 10

alert("Somatório: " + soma + "\nMédia: " + media)