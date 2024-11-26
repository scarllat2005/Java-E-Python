let numeroAleatori = Math.floor(math.random() * 10) + 1;
let palpite;
while (palpite !== numeroAleatorio) {
  palpite = parseInt(prompt("Adivinhe um numero entre 1 e 10:"));
  if (palpite === numeroAleatorio) {
     console.log("Você acertou");
  } else {
      console.log("tente novamente.");
  }
}
