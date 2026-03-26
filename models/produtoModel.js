class Produto {
    constructor(id, nome, descricao, preco) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
}

let produtos = [
    new Produto(1, "Notebook", "Notebook para desenvolvimento", "R$ 3.500,00"),
    new Produto(2, "Mouse", "Mouse sem fio", "R$ 85,00"),
    new Produto(3, "Teclado", "Teclado mecânico RGB", "R$ 450,00")
];

module.exports = { Produto, produtos };
