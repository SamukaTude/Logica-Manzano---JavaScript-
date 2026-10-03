alert("Calcula as raízes de uma equação de segundo grau usando o valor de Delta.")

a = parseFloat(prompt("Digite o valor de A: "))
b = parseFloat(prompt("Digite o valor de B: "))
c = parseFloat(prompt("Digite o valor de C: "))

if (a === 0) {
    alert("O valor de A deve ser diferente de zero.")
} else {
    let delta = b * b - 4 * a * c

    if (delta < 0) {
        alert("Não existem raízes reais.")
    } else if (delta === 0) {
        let raiz = -b / (2 * a)
        alert("Existe uma raiz real: " + raiz)
    } else {
        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a)

        alert("Raiz 1: " + raiz1 + "\nRaiz 2: " + raiz2)
    }
}