const { Produto, produtos } = require("../models/produtoModel");

// Listar todos os produtos
exports.getProdutos = (req, res) => {
    res.render("produtos", { produtos });
};

// Criar um novo produto
exports.createProduto = (req, res) => {
    const { nome, descricao, preco } = req.body;
    const novoProduto = new Produto(produtos.length + 1, nome, descricao, preco);
    produtos.push(novoProduto);
    res.redirect("/produtos");
};

// Página de edição de produto
exports.getEditProduto = (req, res) => {
    const { id } = req.params;
    const produto = produtos.find(p => p.id == id);
    if (!produto) {
        return res.status(404).send("Produto não encontrado");
    }
    res.render("editProduto", { produto });
};

// Atualizar produto
exports.updateProduto = (req, res) => {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    const produto = produtos.find(p => p.id == id);
    
    if (produto) {
        produto.nome = nome;
        produto.descricao = descricao;
        produto.preco = preco;
    }
    
    res.redirect("/produtos");
};

// Deletar produto
exports.deleteProduto = (req, res) => {
    const { id } = req.params;
    const index = produtos.findIndex(p => p.id == id);
    
    if (index !== -1) {
        produtos.splice(index, 1);
    }
    
    res.redirect("/produtos");
};

// Página Sobre
exports.getAbout = (req, res) => {
    res.render("about", { title: "Sobre Nós" });
};

// Página Contato
exports.getContact = (req, res) => {
    res.render("contact", { title: "Contato" });
};
