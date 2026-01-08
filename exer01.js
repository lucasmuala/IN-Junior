function exercicio01() {
    let a = Number(prompt("Digite o coeficiente a: "));
    let b = Number(prompt("Digite o coeficiente b: "));
    let c = Number(prompt("Digite o coeficiente c: "));

    if(a == 0) {
        console.log("a deve ser diferente de 0.");
    } else {
        let delta = b*b - 4*a*c;

        let raiz1 = (-b + delta**0.5)/2*a;
        let raiz2 = (-b - delta**0.5)/2*a;

        if (delta>0) {
            let raiz1 = (-b + delta**0.5)/2*a;
            let raiz2 = (-b - delta**0.5)/2*a;

            console.log('Raízes: '+ raiz1 + ', ' + raiz2);
        } else if (delta == 0) {
            let raiz = -b/(2*a);

            console.log("Raíz: "+ raiz);
        } else {
            console.log("a equação não possui raízes reais.");
        }
    }
}

exercicio01();