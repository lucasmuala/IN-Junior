function countBooksInCategory(booksByCategory) {
    let resultado = {};

    for (let i = 0; i < booksByCategory.length; i++) {
        let cat = booksByCategory[i].category;
        let qtd = booksByCategory[i].books.length;

        resultado[cat] = qtd;
    }
    return resultado;
} 