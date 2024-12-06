# 🍎 Frutas Tech

Bem-vindo ao **Frutas Tech**, um site simples de login/registro que direciona o usuário para uma tela de compras ao fazer login. No registro, o sistema exibe uma mensagem de confirmação em alto relevo ("Cadastrado com Sucesso!"). O projeto é ideal para estudos de autenticação básica e armazenamento de dados no navegador usando **localStorage**.

---

## 🚀 Funcionalidades

- 👤 **Login/Registro de Usuário**:
  - Validação de credenciais no login.
  - Registro com confirmação em modal.
- 🛒 **Tela de Compras**:
  - Lista de frutas disponíveis com preços.
  - Adição de itens ao carrinho.
- 🔒 **Gerenciamento de Sessão**:
  - Redireciona usuários não autenticados para a tela de login.
  - Logout que limpa os dados de autenticação.

---

## 🛠️ Tecnologias Utilizadas

- 🖼️ **HTML5**: Estrutura do site.
- 🎨 **CSS3**: Estilização das páginas.
- ✨ **JavaScript**: Lógica de autenticação, manipulação de DOM e gerenciamento de sessão.
- 💾 **LocalStorage**: Armazenamento dos dados de usuários e sessão.

---

## 🌐 Estrutura das Páginas

1. **Login (login.html)**:
   - Formulário para email e senha.
   - Autenticação de usuários com dados armazenados no navegador.
   - Botão de login alternativo com Google (simulação).

2. **Registro (registro.html)**:
   - Formulário para nome, email e senha.
   - Verificação se o email já foi registrado.
   - Exibição de modal de sucesso no cadastro.

3. **Tela de Compras (home.html)**:
   - Lista de frutas com nome, preço e imagem.
   - Carrinho de compras dinâmico.
   - Botão de logout para encerrar a sessão.

---

## 🛠️ Como executar o projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/wandeilsonfernandes/FrutasTech.git
cd frutas-tech
```

### 2️⃣ Abra no navegador
Abra o arquivo `login.html` diretamente no navegador. Use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para uma experiência melhor.

---

## 🧐 Fluxo do Usuário

1. **Primeiro acesso**:
   - O usuário deve criar uma conta na página de registro.
   - Após o cadastro, é redirecionado para a tela de login.

2. **Login**:
   - Ao fornecer credenciais válidas, o usuário é redirecionado para a tela de compras.

3. **Sessão**:
   - Apenas usuários autenticados podem acessar a tela de compras.
   - Logout redireciona para a tela de login.

4. **Tela de compras**:
   - Visualize as frutas disponíveis e adicione ao carrinho.

---

## 📂 Estrutura do Projeto

```
/arquivos
├── css
│   ├── login.css       # Estilos para a página de login
│   ├── registro.css    # Estilos para a página de registro
│   ├── home.css        # Estilos para a página de compras
├── img
│   ├── carrinho.jpg    # Logo do site
│   ├── google-logo.png # Ícone do botão Google
│   ├── maca.jpeg       # Imagem da fruta Maçã
│   ├── banan.jpg       # Imagem da fruta Banana
│   ├── uva.png         # Imagem da fruta Uva
│   ├── pera.jpg        # Imagem da fruta Pêra
└── script
    ├── login.js        # Lógica de autenticação no login
    ├── registro.js     # Lógica de cadastro e modal
    ├── home.js         # Gerenciamento da sessão e carrinho
```

---

## 💡 Melhorias Futuras

- 🔐 Implementação de autenticação segura (substituir `localStorage` por um backend).
- 📦 Persistência de dados do carrinho para múltiplas sessões.
- 🛠️ Adicionar funcionalidades de edição e exclusão de itens do carrinho.

---

🎉 **Divirta-se usando o Frutas Tech!**
