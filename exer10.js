function exercicio10() {
    let fila = [];
    let acao;

    do {
        console.log("Fila de Atendimento");
        if (fila.length !== 0) {
            for (let i = 0; i < fila.length; i++) {
                console.log((i+1) + " - " + fila[i]);
            }
        }

        acao = prompt("\nEscolha uma opção:\n" + "1 - Novo Cliente\n" + "2 - Atender Cliente\n" + "3 - Sair");

        if (acao === "1") {
            let nome = prompt("Nome: ");
            fila.push(nome);
        } else if (acao === "2") {
            if (fila.length === 0) {
                alert("lista sem clientes");
            } else {
                let cliente = fila.shift();
                console.log("Cliente em atendimento: " + cliente);
            }
        } else if (acao !== "3") {
            alert("inválido");
        }
    } while (acao !== "3");
}

exercicio10();