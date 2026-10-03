alert("Lê dois valores, realiza a troca entre as variáveis A e B e apresenta os valores trocados.");

a = parseInt(prompt("Digite o valor de A: "));
b = parseInt(prompt("Digite o valor de B :"));

auxiliar = a
a = b
b = auxiliar

alert("A = " + a)
alert("B = " + b)