alert("Converte temperaturas de Celsius para Fahrenheit de 10 em 10 graus, de 10 até 100")

resultado = ""

for (celsius = 10; celsius <= 100; celsius = celsius + 10) {
    fahrenheit = (celsius * 9 / 5) + 32

    resultado = resultado + celsius + " °C = " + fahrenheit + " °F\n"
}

alert(resultado)