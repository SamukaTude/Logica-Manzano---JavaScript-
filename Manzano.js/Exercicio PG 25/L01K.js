alert("Converte Reais em Dolar: ")

cotacao = parseFloat(prompt("Digite a cotação do Dólar: "));

valorReal = parseFloat(prompt("Digite o valor em Reais: "));

valorDolar = valorReal / cotacao;

alert("Valor em dólares: US$ " + valorDolar.toFixed(2));