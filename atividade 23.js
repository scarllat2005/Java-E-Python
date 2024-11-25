function encontrarNumero(matriz, numeroEspecifico) {
    for (let num of matriz) {
        if (num === numeroEspecifico) {
            console.log(`${numeroEspecifico} encontrado!`);
            return;
        }
    }
    console.log(`${numeroEspecifico} não está no array.`);
}
