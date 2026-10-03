alert("Apresenta os 15 primeiros termos da série de Fibonacci")

anterior = 1
atual = 1
resultado = "1, 1"

for (i = 3; i <= 15; i++) {
    proximo = anterior + atual
    resultado = resultado + ", " + proximo

    anterior = atual
    atual = proximo
}

alert(resultado)