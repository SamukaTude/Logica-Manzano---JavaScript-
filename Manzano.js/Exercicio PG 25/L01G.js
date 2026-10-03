alert("Calcula a soma e a multiplicação entre quatro números.") 
 
 a = parseFloat(prompt("Digite A: "));
 b = parseFloat(prompt("Digite B: "));
 c = parseFloat(prompt("Digite C: "));
 d = parseFloat(prompt("Digite D: "))

alert(
  "==== ADIÇÃO ====\n\n" +
  "A + B = " + (a + b) + "\n" +
  "A + C = " + (a + c) + "\n" +
  "A + D = " + (a + d) + "\n" +
  "B + C = " + (b + c) + "\n" +
  "B + D = " + (b + d) + "\n" +
  "C + D = " + (c + d) +
  "\n\n" +
  "==== MULTIPLICAÇÃO ====\n\n" +
  "A * B = " + (a * b) + "\n" +
  "A * C = " + (a * c) + "\n" +
  "A * D = " + (a * d) + "\n" +
  "B * C = " + (b * c) + "\n" +
  "B * D = " + (b * d) + "\n" +
  "C * D = " + (c * d));