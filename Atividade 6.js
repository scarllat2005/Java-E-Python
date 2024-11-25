function calculadora(numero1, numero2, operacao) {
    switch (operacao) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 !== 0) {
                return numero1 / numero2;
            } else {
                return "Divisão por zero não permitida.";
            }
        default:
            return "Operação inválida.";
    }
}

console.log(calculadora(10, 5, '+')); 
