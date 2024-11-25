function verificarPrimos(numeros) {
    numeros.forEach(num => {
        let isPrimo = num > 1 && ![...Array(num).keys()].slice(2).some(i => num % i === 0);
        if (isPrimo) {
            console.log(`${num} é primo.`);
        } else {
            console.log(`${num} não é primo.`);
        }
    });
}
