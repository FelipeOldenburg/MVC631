class Produto {
    constructor(id, nome, descricao, preco) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
}

let produtos = [
    new Produto(1, "Notebook", "Notebook para desenvolvimento", 350000),
    new Produto(2, "Mouse", "Mouse sem fio", 8500),
    new Produto(3, "Teclado", "Teclado mecanico RGB", 45000)
];

let proximoProdutoId = Math.max(...produtos.map(produto => produto.id), 0) + 1;

function gerarProximoProdutoId() {
    return proximoProdutoId++;
}

function converterPrecoParaCentavos(preco) {
    if (typeof preco === "number") {
        return Math.round(preco * 100);
    }

    const precoLimpo = String(preco).replace(/[^\d,.]/g, "");
    const precoNormalizado = precoLimpo.includes(",")
        ? precoLimpo.replace(/\./g, "").replace(",", ".")
        : precoLimpo;

    return Math.round(Number(precoNormalizado) * 100);
}

function formatarPreco(precoEmCentavos) {
    return (precoEmCentavos / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function formatarPrecoParaInput(precoEmCentavos) {
    return (precoEmCentavos / 100).toFixed(2).replace(".", ",");
}

module.exports = {
    Produto,
    produtos,
    gerarProximoProdutoId,
    converterPrecoParaCentavos,
    formatarPreco,
    formatarPrecoParaInput
};
