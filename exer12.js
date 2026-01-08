function encontrarElementoUnico(numeros) {
    let cont = {};

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i];

        if (cont[n] === undefined) {
            cont[n] = 1;
        } else {
            cont[n]++;
        }
    }

    for (let n in cont) {
        if (cont[n] === 1) {
            console.log("elemento: ", n);
            return n;
        }
    }
}