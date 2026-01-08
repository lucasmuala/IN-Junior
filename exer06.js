function exercicio06() {
    let n = Number(prompt("digite o número de termos: "));

    function fibonacci(n, termos = [], i = 0) {
        if (i === n) {
            console.log(termos);
            return termos;
        }

        if (i === 0) {
            termos.push(0);
        } else if (i === 1) {
            termos.push(1);
        } else {
            termos.push(termos[i - 1] + termos[i - 2]);
        }

        return fibonacci(n, termos, i + 1);
    }

    if (Number.isInteger(n) && n > 0) {
        fibonacci(n);
    } else {
        alert("erro");
    }
}