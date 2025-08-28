# Landing Page - AllePets 🐾

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

Este repositório contém o código-fonte completo para a landing page da AllePets, uma plataforma criada para conectar tutores de pets a anfitriões apaixonados e de confiança.

### 📸 Screenshot

*Insira aqui um screenshot da sua landing page. É uma ótima forma de mostrar o resultado final!*

![Screenshot da Landing Page AllePets](images/screenshot-allepets.png)

---

## 🚀 Sobre o Projeto

A landing page da AllePets foi desenvolvida como um ponto de entrada para atrair e cadastrar os primeiros usuários da plataforma, tanto tutores quanto anfitriões. A página é estática, focada em apresentar a proposta de valor da marca, seus diferenciais e depoimentos de usuários.

### ✨ Funcionalidades

-   **Seção Hero:** Chamada principal atrativa para capturar a atenção do visitante.
-   **Quem Somos:** Apresentação da marca e sua missão.
-   **Como Funciona:** Explicação visual e simplificada do processo em 3 passos.
-   **Diferenciais:** Lista de benefícios que tornam a AllePets única.
-   **Depoimentos:** Prova social com testemunhos de usuários.
-   **Chamada para Ação (CTA):** Seção com dois caminhos claros para cadastro de tutores e anfitriões.
-   **Design Responsivo:** A página se adapta a diferentes tamanhos de tela (desktop, tablets e celulares).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrão, sem a necessidade de frameworks complexos.

-   **HTML5:** Para a estrutura semântica do conteúdo.
-   **CSS3:** Para a estilização, layout e responsividade.

---

## ⚙️ Como Executar o Projeto

Como este é um projeto de frontend estático, não há necessidade de instalação de dependências ou builds complexos.

**1. Clone o repositório:**
```bash
git clone [https://github.com/seu-usuario/allepets-landing-page.git](https://github.com/seu-usuario/allepets-landing-page.git)
```

**2. Navegue até a pasta do projeto:**
```bash
cd allepets-landing-page
```

**3. Abra o arquivo principal:**
Abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

**Dica de Desenvolvimento:**
Para uma melhor experiência de desenvolvimento com recarregamento automático (live reload), você pode usar a extensão **Live Server** no Visual Studio Code.

---

### 📂 Estrutura de Arquivos

A estrutura do projeto é simples e organizada da seguinte forma:

```
/
├── index.html      # Arquivo principal com toda a estrutura da página.
├── style.css       # Folha de estilos para o design e responsividade.
├── images/         # Pasta para armazenar todas as imagens e ícones.
└── README.md       # Este arquivo de instruções.
```

---

## 🎨 Como Personalizar

Você pode facilmente alterar os textos, imagens e cores da landing page.

### 📝 Textos e Conteúdo
Todo o conteúdo de texto (títulos, parágrafos, itens de lista) pode ser editado diretamente no arquivo `index.html`. Cada seção está comentada para fácil identificação.

**Exemplo:** Para alterar o título principal:
```html
<section class="hero">
    ...
    <div class="hero-text-box">
        <h2>Uma comunidade feita para cuidar bem de quem você mais ama.</h2>
        ...
    </div>
    ...
</section>
```

### 🖼️ Imagens
1.  Adicione suas imagens à pasta `/images`.
2.  No arquivo `index.html`, altere o atributo `src` nas tags `<img>` para o caminho da sua nova imagem.

**Exemplo:**
```html
<img src="images/meu-novo-filhote.png" alt="Descrição da nova imagem">
```

### 🎨 Cores e Fontes
As cores principais e fontes são definidas como variáveis no início do arquivo `style.css`. Alterar uma variável aqui atualizará sua cor em todo o site.

**Exemplo em `style.css`:**
```css
/* Altere os códigos hexadecimais para as cores que desejar */
:root {
    --color-primary-green: #79c029;
    --color-primary-pink: #f55582;
    --color-text-dark: #3c3c3c;
}

/* Altere as fontes aqui */
body {
    font-family: 'Nunito', sans-serif;
}

h2 {
    font-family: 'Poppins', sans-serif;
}
```

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---
**Feito com ❤️ para todos os pets!**
