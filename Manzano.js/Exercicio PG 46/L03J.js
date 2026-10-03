alert("Calcula a soma e a média dos números pares entre 50 e 70")

soma = 0
quantidade = 0

for (i = 50; i <= 70; i++) {
    if (i % 2 == 0) {
        soma = soma + i
        quantidade = quantidade + 1
    }
}

media = soma / quantidade

alert("Soma: " + soma + "\nMédia: " + media)