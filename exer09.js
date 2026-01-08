function authors(booksByCategory) {
    let autores = [];

    for (let i = 0; i < booksByCategory.length; i++) {
        let livros = booksByCategory[i].books;

        for (let j = 0; j < livros.length; j++) {
            let autor = livros[j].author;

            if (!resultado.includes(autor)) {
                resultado.push(autor);
            }
        }
    }

    return autores;
}