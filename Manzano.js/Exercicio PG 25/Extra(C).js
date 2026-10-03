alert("Calcula o total de eleitores e os percentuais de votos válidos, votos de cada candidato, votos nulos e votos em branco.")

votosA = parseInt(prompt("Digite o número de votos A: "));

votosB = parseInt(prompt("Digite o número de votos B: "));

votosC = parseInt(prompt("Digite o número de votos C: "));

nulos = parseInt(prompt("Digite o número de votos Nulos: "));

brancos = parseInt(prompt("Digite o número de votos Brancos: "));

resultado = votosA + votosB + votosC + nulos + brancos;

alert("Total de votos: " + resultado);

votosvalido = votosA + votosB + votosC;

resultadop = (votosvalido / resultado) * 100;

percentualA = (votosA / resultado) * 100;

percentualB = (votosB / resultado) * 100;

percentualC = (votosC / resultado) * 100;

percentualN = (nulos / resultado) * 100;

percentualBra = (brancos / resultado) * 100;

alert(
    "Percentual de votos válidos: " + resultadop.toFixed(2) + "%\n" +
    "Percentual de votos A: " + percentualA.toFixed(2) + "%\n" +
    "Percentual de votos B: " + percentualB.toFixed(2) + "%\n" +
    "Percentual de votos C: " + percentualC.toFixed(2) + "%\n" +
    "Percentual de votos Nulos: " + percentualN.toFixed(2) + "%\n" +
    "Percentual de votos Brancos: " + percentualBra.toFixed(2) + "%" );