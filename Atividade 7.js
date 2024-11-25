function verificarPalindromo(string) {
    let limpaString = string.replace(/\s+/g, '').toLowerCase();
    let reverso = limpaString.split('').reverse().join('');
    return limpaString === reverso;
}

console.log(verificarPalindromo("arara")); 
console.log(verificarPalindromo("hello"));
