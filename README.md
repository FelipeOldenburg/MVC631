# 🛒 MVC631 — API de Gerenciamento de Produtos

> API REST desenvolvida com **Node.js** e **Express** seguindo o padrão arquitetural **MVC (Model-View-Controller)**.  
> Permite o cadastro, listagem, edição e remoção de produtos com autenticação de sessão, renderização de views via **EJS** e boas práticas de documentação interna com **JSDoc**.  
> Projeto desenvolvido durante o curso técnico de Desenvolvimento de Sistemas, com foco em organização de código, separação de responsabilidades e manutenibilidade.

---

## 🏷️ Badges

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/Template-EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

---

## 🗂️ Estrutura do Projeto

```
MVC631/
├── controllers/          # Camada Controller — intercepta requisições HTTP
│   ├── authController.js
│   └── produtoController.js
├── models/               # Camada Model — regras de dados e persistência
│   ├── produtoModel.js
│   └── User.js
├── routes/               # Definição das rotas da aplicação
│   ├── authRoutes.js
│   └── produtoRoutes.js
├── middlewares/          # Middlewares de proteção de rotas
│   └── auth.js
├── views/                # Templates EJS (camada View)
├── public/               # Arquivos estáticos (CSS, imagens)
├── out/                  # Documentação gerada pelo JSDoc
├── index.js              # Ponto de entrada da aplicação
└── package.json
```

---

## 🛠️ Stack Tecnológica

- **[Node.js](https://nodejs.org/)** — Runtime JavaScript no servidor
- **[Express 5](https://expressjs.com/)** — Framework web para roteamento e middlewares
- **[EJS](https://ejs.co/)** — Template engine para renderização das views
- **[express-session](https://www.npmjs.com/package/express-session)** — Gerenciamento de sessões de usuário
- **[body-parser](https://www.npmjs.com/package/body-parser)** — Parsing de dados de formulários HTTP
- **[JSDoc](https://jsdoc.app/)** — Documentação interna do código-fonte

---

## ⚙️ Guia de Instalação e Execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão **18 ou superior** instalado
- [Git](https://git-scm.com/) instalado

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/MVC631.git
cd MVC631
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no exemplo abaixo:

```bash
cp .env.example .env
```

> Preencha os valores conforme a seção **Variáveis de Ambiente** abaixo.

### 4. Iniciar o servidor em modo de desenvolvimento

```bash
npm start
```

O terminal exibirá os endereços disponíveis:

```
✅ Servidor rodando!

📱 Local:   http://localhost:3000
🌐 Network: http://192.168.x.x:3000
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Porta em que o servidor irá escutar (padrão: 3000)
PORT=3000

# Segredo utilizado para assinar e verificar as sessões (use uma string longa e aleatória)
SESSION_SECRET=sua_chave_secreta_aqui
```

> ⚠️ **Nunca** suba o arquivo `.env` real para o GitHub. Ele já está incluído no `.gitignore`.

---

## 📋 Rotas Disponíveis

| Método | Rota                    | Descrição                        | Autenticação |
|--------|-------------------------|----------------------------------|:------------:|
| GET    | `/login`                | Renderiza a tela de login        | ❌           |
| POST   | `/login`                | Processa as credenciais de login | ❌           |
| GET    | `/logout`               | Encerra a sessão do usuário      | ✅           |
| GET    | `/`                     | Página inicial (Home)            | ✅           |
| GET    | `/produtos`             | Lista todos os produtos          | ✅           |
| POST   | `/produtos`             | Cadastra um novo produto         | ✅           |
| GET    | `/produtos/edit/:id`    | Formulário de edição             | ✅           |
| POST   | `/produtos/edit/:id`    | Atualiza um produto existente    | ✅           |
| GET    | `/produtos/delete/:id`  | Remove um produto                | ✅           |
| GET    | `/about`                | Página Sobre Nós                 | ✅           |
| GET    | `/contact`              | Página de Contato                | ✅           |

---

## 📚 Documentação Interna (JSDoc)

O projeto utiliza **JSDoc** para documentação inline de todas as camadas Model e Controller.  
Para gerar ou atualizar a documentação em HTML:

```bash
npx jsdoc models/ controllers/ -d out/
```

A documentação gerada ficará disponível em `./out/index.html`.

---

## 👤 Acesso Padrão (Desenvolvimento)

| Campo | Valor             |
|-------|-------------------|
| Email | admin@email.com   |
| Senha | 123456            |

> ⚠️ Estas credenciais são apenas para fins de desenvolvimento local. Nunca utilize senhas simples em produção.

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Consulte o arquivo `package.json` para mais detalhes.
