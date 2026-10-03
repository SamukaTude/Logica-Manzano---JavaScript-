alert("Calcula o total de grãos de trigo em um tabuleiro de xadrez, dobrando a quantidade a cada quadro")

graos = 1
soma = 0

for (quadro = 1; quadro <= 64; quadro++) {
    soma = soma + graos
    graos = graos * 2
}

alert("Total de grãos de trigo: " + soma)