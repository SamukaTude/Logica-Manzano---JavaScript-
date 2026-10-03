alert("Apresenta as potências de 3 com expoentes de 0 até 15, sem utilizar o operador de exponenciação")

potencia = 1
resultado = ""

for (expoente = 0; expoente <= 15; expoente++) {
    resultado = resultado + "3^" + expoente + " = " + potencia + "\n"
    potencia = potencia * 3
}

alert(resultado)