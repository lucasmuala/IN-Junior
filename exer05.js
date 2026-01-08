function exercicio05() {
    let v = Number(prompt("digite o valor inteiro: "));

    if (v%3===0 && v%5!==0) {
        console.log("fizz");
    } else if (v%3!==0 && v%5===0){
        console.log("buzz");
    } else if (v%3===0 && v%5===0){
        console.log("fizzbuzz");
    }
}

exercicio05();