function requireAuth(req, res, next) {
    if (req.session && req.session.user) {
        res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
        res.set("Pragma", "no-cache");
        res.set("Expires", "0");
        return next();
    }

    res.redirect("/login");
}

module.exports = requireAuth;
