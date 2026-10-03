alert("Calcula a média de quatro notas e informa se o aluno foi aprovado.")

nota1 = parseFloat(prompt("Digite a primeira nota: "))
nota2 = parseFloat(prompt("Digite a segunda nota: "))
nota3 = parseFloat(prompt("Digite a terceira nota: "))
nota4 = parseFloat(prompt("Digite a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 5) {
    alert("Aluno aprovado! Média: " + media)
} else {
    alert("Aluno não aprovado. Média: " + media)
}