alert("Apresenta os quadrados dos números inteiros de 15 até 200")

resultado = ""

for (i = 15; i <= 200; i++) {
    quadrado = i * i
    resultado = resultado + i + "² = " + quadrado + "\n"
}

alert(resultado)