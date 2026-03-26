const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

router.get("/produtos", produtoController.getProdutos);
router.post("/produtos", produtoController.createProduto);
router.get("/produtos/edit/:id", produtoController.getEditProduto);
router.post("/produtos/edit/:id", produtoController.updateProduto);
router.get("/produtos/delete/:id", produtoController.deleteProduto);
router.get("/about", produtoController.getAbout);
router.get("/contact", produtoController.getContact);

module.exports = router;
