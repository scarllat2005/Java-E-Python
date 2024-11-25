let a = 0, b = 1, proximo;
let contador = 0;
console.log(a);
console.log(b);
while (contador < 8) {
    proximo = a + b;
    console.log(proximo);
    a = b;
    b = proximo;
    contador++;
}
