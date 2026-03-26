const express = require("express");
const path = require("path");
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");
const bodyParser = require("body-parser");

// Configura a pasta 'public' como estática
app.use(express.static(path.join(__dirname, "public")));

// Configura o diretório de views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Rota para HOME
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use(produtoRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));