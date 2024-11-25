function encontrarPrimeiroNegativo(numeros) {
    for (let num of numeros) {
        if (num < 0) {
            console.log(`Primeiro número negativo: ${num}`);
            return;
        }
    }
    console.log("Não há números negativos na lista.");
}
