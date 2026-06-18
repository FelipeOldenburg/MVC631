/**
 * @fileoverview Model de usuários da aplicação MVC631.
 * Gerencia os dados de autenticação e a busca de usuários em memória.
 * @module User
 */

/**
 * @typedef {Object} User
 * @property {number} id - Identificador único do usuário.
 * @property {string} nome - Nome completo do usuário.
 * @property {string} email - Endereço de e-mail (utilizado como login).
 * @property {string} senha - Senha de acesso (armazenada em texto plano nesta versão).
 * @todo Implementar hash de senha com bcrypt antes de subir para produção.
 */

/**
 * Lista em memória contendo os usuários cadastrados na aplicação.
 * @type {User[]}
 */
const users = [
    {
        id: 1,
        nome: "Administrador",
        email: "admin@email.com",
        senha: "123456"
    }
];

/**
 * Busca um usuário pelo seu endereço de e-mail.
 * Utilizado principalmente no fluxo de autenticação (login).
 * @param {string} email - O e-mail do usuário a ser localizado.
 * @returns {User|undefined} O objeto do usuário encontrado ou `undefined` se não existir.
 *
 * @example
 * const user = findByEmail("admin@email.com");
 * // Retorna: { id: 1, nome: "Administrador", email: "admin@email.com", senha: "123456" }
 */
function findByEmail(email) {
    return users.find(user => user.email === email);
}

module.exports = { findByEmail };
