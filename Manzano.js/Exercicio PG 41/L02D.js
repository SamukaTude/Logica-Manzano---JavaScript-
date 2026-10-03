alert("Calcula a média. Se for menor que 7, solicita a nota do exame e calcula uma nova média.")

nota1 = parseFloat(prompt("Digite a primeira nota: "))
nota2 = parseFloat(prompt("Digite a segunda nota: "))
nota3 = parseFloat(prompt("Digite a terceira nota: "))
nota4 = parseFloat(prompt("Digite a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    alert("Aluno aprovado! Média: " + media)
} else {
    let exame = parseFloat(prompt("Digite a nota do exame: "))

    let novaMedia = (media + exame) / 2

    if (novaMedia >= 5) {
        alert("Aluno aprovado em exame! Média: " + novaMedia)
    } else {
        alert("Aluno não aprovado. Média: " + novaMedia)
    }
}