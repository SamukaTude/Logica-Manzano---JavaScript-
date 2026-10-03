alert("Lê 15 valores inteiros e calcula a soma do fatorial de cada valor")

soma = 0

for (i = 1; i <= 15; i++) {
    numero = parseInt(prompt("Digite o " + i + "º valor: "))

    fatorial = 1

    for (j = 1; j <= numero; j++) {
        fatorial = fatorial * j
    }

    soma = soma + fatorial
}

alert("Somatório dos fatoriais: " + soma)