sm = parseFloat(prompt("Digite seu salário mensal: "));

pr = parseFloat(prompt("Digite o percentual de reajuste: "));

ns = sm + (sm * pr / 100);

alert("Seu novo salário é: R$ " + ns.toFixed(2));