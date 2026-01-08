function exercicio02() {
    let n = Number(prompt("digite um número inteiro positivo: "));

    if (!Number.isInteger(n) || n <= 0) {
        alert("erro");
        return exercicio02();
    }

    function fatorial(n) {
        if (n===1) {
            return 1;
        }
        return n * fatorial(n-1);
    }

    console.log('fatorial = ' + fatorial(n));
    let continuar = prompt("deseja continuar?");

    if(continuar === 'S' || continuar === 's') {
        return exercicio02();
    }
}

exercicio02();