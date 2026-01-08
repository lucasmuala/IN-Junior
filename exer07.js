function exercicio07() {
    let frase = prompt("frase: ");

    let letras = frase.toLowerCase().split("");

    let inicio = 0;
    let fim = letras.length - 1;

    while (inicio<fim) {
        if (letras[inicio] === " ") {
            inicio++;
        } else if (letras[inicio] !== letras[fim]) {
            console.log("não é palíndromo.");
            return;
        } else {
            inicio++;
            fim--;
        }
    }
    console.log("é palíndromo.");
}