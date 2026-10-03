alert("Apresenta os números menores que 200 que são divisíveis por 4")

resultado = ""

for (i = 1; i < 200; i++) {
    if (i % 4 == 0) {
        resultado = resultado + i + "\n"
    }
}

alert(resultado)