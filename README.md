## 📌 Descrição

Este projeto consiste no desenvolvimento de uma **landing page moderna** para apresentação de produtos da Lenovo, utilizando **React + CSS moderno**.

A aplicação simula uma vitrine digital de produtos, exibindo notebooks com:

* Imagens reais dos produtos
* Informações básicas (nome, descrição e preço)
* Modal interativo com destaque de promoção
* Layout responsivo e visual profissional

---

## 🎯 Objetivo do Projeto

O objetivo principal é aplicar conceitos fundamentais de desenvolvimento front-end, como:

* Componentização com React
* Manipulação de estado (`useState`)
* Estruturação de layout com CSS moderno
* Experiência do usuário (UX/UI)
* Organização e boas práticas de código

---

## 🧠 Tecnologias Utilizadas

* ⚛️ React (Vite)
* 🎨 CSS3 (Flexbox + Grid)
* 📦 JavaScript (ES6+)
* 🖼️ Imagens locais (assets)

---

## 📁 Estrutura do Projeto

```bash
projeto/
├── src/
│   ├── assets/
│   │   ├── LenovoFundo.jpg
│   │   ├── IdeaPad.jpeg
│   │   ├── X1.jpeg
│   │   ├── Legion.jpeg
│   │   └── YogaBook.jpeg
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## 🚀 Funcionalidades

### 🖼️ 1. Fundo com imagem da marca

* Utilização de uma imagem grande da Lenovo como background
* Aplicação de overlay escuro para melhorar contraste e leitura

---

### 💻 2. Exibição de produtos

Cada produto apresenta:

* Imagem do notebook
* Nome do modelo
* Descrição
* Preço

---

### 🧾 3. Modal de detalhes

Ao clicar em um produto:

* Abre um modal interativo
* Exibe imagem ampliada
* Mostra desconto fictício (-30%)
* Calcula valores automaticamente
* Possui botão de ação (compra)

---

### 🎨 4. Design moderno

* Cards com sombra e efeito hover
* Layout centralizado
* Uso de transparência e blur
* Visual inspirado em landing pages profissionais

---

### 📱 5. Responsividade

* Compatível com desktop e mobile
* Grid adaptável automaticamente
* Modal responsivo

---

## ⚙️ Como Executar o Projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodar o projeto

```bash
npm run dev
```

### 3. Acessar no navegador

```bash
http://localhost:5173
```

---

## 🧩 Principais Conceitos Utilizados

### 📌 useState

Controle de estado para:

* Produto selecionado
* Exibição do modal

---

### 📌 Renderização dinâmica

Uso de `.map()` para gerar os produtos automaticamente:

```js
PRODUCTS.map((product) => ...)
```

---

### 📌 CSS Grid

Organização responsiva dos cards:

```css
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
```

---

### 📌 Overlay de fundo

Camada escura aplicada sobre a imagem para melhorar a leitura:

```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.45),
  rgba(0, 0, 0, 0.72)
);
```

---

## 💡 Possíveis Melhorias

* 🔗 Integração com API de produtos
* 🛒 Carrinho de compras
* 📲 Botão de compra via WhatsApp
* ⭐ Sistema de avaliações
* 🔍 Filtro de produtos
* 💳 Integração com pagamento

---
## 👨‍💻 Autor

**Bernardo Soares Zacharias**
**Rafael Rinaldi Da Matta**

📌 Estudante de Desenvolvimento de Sistemas
📌 Focado em Front-end, UX/UI e soluções tecnológicas

🔗 LinkedIn: https://www.linkedin.com/in/seu-link-aqui](https://www.linkedin.com/in/bernardo-zacharias-b9aa38282/

---

## 🏆 Diferenciais do Projeto

* Interface moderna e profissional
* Código organizado e escalável
* Uso de boas práticas em React
* Foco em experiência do usuário

---

## 📄 Licença

Este projeto é de uso educacional e não possui fins comerciais.

---
