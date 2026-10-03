alert("Calcula a área de vários cômodos e apresenta a área total da residência")

areaTotal = 0
continuar = "SIM"

while (continuar != "NAO") {
    nome = prompt("Digite o nome do cômodo: ")
    largura = parseFloat(prompt("Digite a largura do cômodo: "))
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo: "))

    area = largura * comprimento
    areaTotal = areaTotal + area

    alert("Cômodo: " + nome + "\nÁrea: " + area + " m²")

    continuar = prompt("Deseja calcular outro cômodo? Digite SIM ou NAO.")
    continuar = continuar.toUpperCase()
}

alert("Área total da residência: " + areaTotal + " m²")