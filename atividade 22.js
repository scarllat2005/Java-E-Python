function contarPares(numeros) {
    let contagem = 0;
    numeros.forEach(num => {
        if (num % 2 === 0) contagem++;
    });
    if (contagem > 0) {
        console.log(`Total de números pares: ${contagem}`);
    } else {
        console.log("Não há números pares.");
    }
}
