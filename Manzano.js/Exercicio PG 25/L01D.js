alert("O programa calcula o consumo de combustível de um veículo, considerando a velocidade média, o tempo gasto e a distância percorrida.");

velocidade = parseFloat(prompt("Digite a velocidade média: "));

tempo = parseFloat(prompt("Digite o tempo gasto: "));

distancia = tempo * velocidade;

litros_usados = distancia / 12;

alert("Velocidade média: " + velocidade + " km/h");
alert("Tempo gasto: " + tempo + " horas");
alert("Distância percorrida: " + distancia + " km");
alert("Litros usados: " + litros_usados.toFixed(2) + " litros");