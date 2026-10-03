alert("Calcula o valor de uma prestação em atraso, considerando juros e tempo de atraso.");

valor = parseFloat(prompt("Digite o valor da prestação: "));
taxa = parseFloat(prompt("Digite a taxa de juros: "));
tempov = parseFloat(prompt("Digite o tempo de atraso: "));

prestacao = valor + (valor * taxa/100) * tempov

alert("Valor da prestação em atraso: R$" + prestacao.toFixed(2));
