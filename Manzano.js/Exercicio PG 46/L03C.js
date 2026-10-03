alert("Calcula a soma dos números pares existentes entre 1 e 500")

soma = 0

for (i = 1; i <= 500; i++) {
    if (i % 2 == 0) {
        soma = soma + i
    }
}

alert("A soma dos números pares de 1 até 500 é: " + soma)