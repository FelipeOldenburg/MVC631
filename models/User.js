const users = [
    {
        id: 1,
        nome: "Administrador",
        email: "admin@email.com",
        senha: "123456"
    }
];

function findByEmail(email) {
    return users.find(user => user.email === email);
}

module.exports = { findByEmail };
