function exercicio04() {
    let reais = Number(prompt("Valor: "));

    let euro = reais/6.10;
    let dolar = reais/5.70;

    console.log("Valor em reais: R$" + reais);
    console.log("Valor em euros: €" + euro);
    console.log("Valor em dólares: U$" + dolar);
}

exercicio04();