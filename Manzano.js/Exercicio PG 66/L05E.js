alert("Apresenta os números inteiros ímpares de 0 até 20")

resultado = ""

for (i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        resultado = resultado + i + "\n"
    }
}

alert(resultado)