function verificarTodosPositivos(numeros) {
    for (let num of numeros) {
        if (num < 0) {
            console.log("Há um número negativo na lista.");
            return;
        }
    }
    console.log("Todos os números são positivos.");
}
