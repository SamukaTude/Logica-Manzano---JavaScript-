alert("Converte um valor em dólares para reais utilizando a cotação informada pelo usuário.")

cotacao = parseFloat(prompt("Digite a cotação do dólar: "));

valorDolar = parseFloat(prompt("Digite a quantidade de dólares: "));

valorReal = valorDolar * cotacao;

alert("Valor em reais: R$ " + valorReal.toFixed(2));