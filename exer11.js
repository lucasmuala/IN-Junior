function exercicio11() {
    let qtd = Number(prompt("Quantidade de números: "));
    let vetor = [];

    for (let i = 0; i < qtd; i++) {
        vetor.push(Number(prompt("número "+ (i+1) + ": ")));
    }

    let cont = 0;

    for (let i = 1; i <vetor.length; i++) {
        if (vetor[i] > vetor [i-1]) {
            cont++;
        }
    }

    console.log("Vetor: ", vetor);
    console.log("Quantidade em ordem crescente: ", cont);
}

exercicio11();