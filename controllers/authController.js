const User = require("../models/User");

exports.getLogin = (req, res) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");

    if (req.session.user) {
        return res.redirect("/");
    }

    res.render("login", {
        title: "Login",
        error: null
    });
};

exports.login = (req, res) => {
    const { email, senha } = req.body;
    const user = User.findByEmail(email);

    if (!user || user.senha !== senha) {
        return res.status(401).render("login", {
            title: "Login",
            error: "E-mail ou senha invalido."
        });
    }

    req.session.user = {
        id: user.id,
        nome: user.nome,
        email: user.email
    };

    res.redirect("/");
};

exports.logout = (req, res) => {
    req.session.destroy(error => {
        if (error) {
            return res.redirect("/");
        }

        res.clearCookie("connect.sid");
        res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
        res.set("Pragma", "no-cache");
        res.set("Expires", "0");
        res.redirect("/login");
    });
};
