function contarOcorrencias(array, valor) {
    let contagem = 0;
    array.forEach(num => {
        if (num === valor) contagem++;
    });
    console.log(`O valor ${valor} aparece ${contagem} vezes.`);
}
