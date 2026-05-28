const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const authRoutes = require("./routes/authRoutes");
const produtoRoutes = require("./routes/produtoRoutes");
const requireAuth = require("./middlewares/auth");
const bodyParser = require("body-parser");

// Configura a pasta 'public' como estática
app.use(express.static(path.join(__dirname, "public")));

// Configura o diretório de views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    next();
});

app.use(session({
    secret: "mvc631-session-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 30
    }
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

app.use(authRoutes);

// Rota para HOME
app.get("/", requireAuth, (req, res) => {
  res.render("index", { title: "Home" });
});

app.use(requireAuth, produtoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    const os = require('os');
    const interfaces = os.networkInterfaces();
    let localIP = 'localhost';
    
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                localIP = iface.address;
                break;
            }
        }
    }
    
    console.log(`\n✅ Servidor rodando!\n`);
    console.log(`📱 Local:   http://localhost:${PORT}`);
    console.log(`🌐 Network: http://${localIP}:${PORT}\n`);
});
