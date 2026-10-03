alert("Separa dois valores do maior para o menor")

a = parseFloat(prompt("Digite o primeiro número: "))

b = parseFloat(prompt("Digite o segundo número: "))

if (a > b) {
    alert("=== O resultado é ===\n" + a + "\n" + b)
} else {
    alert("=== O resultado é ===\n" + b + "\n" + a)
}