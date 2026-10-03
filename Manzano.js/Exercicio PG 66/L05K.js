alert("Apresenta o fatorial dos números ímpares de 1 até 10")

resultado = ""

for (i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        fatorial = 1

        for (j = 1; j <= i; j++) {
            fatorial = fatorial * j
        }

        resultado = resultado + i + "! = " + fatorial + "\n"
    }
}

alert(resultado)