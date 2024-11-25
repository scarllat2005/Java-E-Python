function encontrarMaiorNumero(numeros) {
    let maior = numeros[0];
    numeros.forEach(num => {
        if (num > maior) maior = num;
    });
    console.log(`Maior número: ${maior}`);
}
