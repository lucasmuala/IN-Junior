let time = [];

function adicionarJogador() {
    let nome = prompt("Nome: ");
    let idade = Number(prompt("Idade: "));
    let posicao = prompt("Posição: ");
    let pontuacao = Number(prompt("Pontuação: "));

    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };

    time.push(jogador);
}

function buscarPorPosicao() {
    let posicao = prompt("Posição: ");
    let achou = [];

    for (let i = 0; i<time.length; i++) {
        if (time[i].posicao.toLowerCase() === posicao.toLowerCase()) {
            achou.push(time[i]);
        }
    }

    if (achou.length === 0) {
        console.log("nenhum jogador");
    } else {
        for (let i = 0; i < achou.length; i++) {
            console.log(achou[i]);
        }
    }
}

function listarTime() {
    if (time.length === 0) {
        console.log("time vazio");
        return;
    }
    for (let i=0; i < time.length; i++) {
        console.log(time[i]);
    }
}

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        console.log("time vazio");
        return;
    }

    let soma = 0;

    for (let i=0; i < time.length; i++) {
        soma += time[i].pontuacao;
    }

    let media = soma/time.length;
    console.log("Pontuação média: " + media);
}

function menu() {
    let acao;

    do {
        acao = prompt("1 - Adicionar jogador\n 2 - Buscar por posição\n 3 - Listar time\n 4 - Calcular pontuação média\n 5 - Sair");
        if (acao === "1") {
            adicionarJogador();
        } else if (acao === "2") {
            buscarPorPosicao();
        } else if (acao === "3") {
            listarTime();
        } else if (acao === "4") {
            calcularPontuacaoMedia();
        }
    } while (acao !== "5");
}

menu();