function somaImpares(numeros) {
    let soma = 0;
    numeros.forEach(num => {
        if (num % 2 !== 0) soma += num;
    });
    console.log(`Soma total dos números ímpares: ${soma}`);
}
