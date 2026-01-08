let datas = [2001, 2002, 1998, 2005, 1996];

function verificarIdades(datas) {
    let ano = Number(prompt("Ano atual: "));

    let resposta = [];

    for(let i = 0; i < datas.length; i++) {
        let idade = ano - datas[i];

        if (idade >= 18) {
            resposta.push("maior");
            console.log("Pessoa "+ (i+1) +": Maior de idade");
        } else {
            resposta.push("menor");
            console.log("Pessoa "+ (i+1) +": Menor de idade");

        }
    }

    return resposta;
}

verificarIdades(datas);