<p align="center">
  <img width="400px" src="https://github.com/user-attachments/assets/2e27a6a5-ae39-49f8-9878-59502284f87b"/>
</p>

<div align="center">
  <a href="https://styleweather.vercel.app/" target="_blank"><img src="https://img.shields.io/badge/Aplicação Web-FFFFFF?style=for-the-badge&logo=Vercel&logoColor=000000"></a> 
  <a href="https://www.canva.com/design/DAGmzn56phI/RSoibSAqQ5mAJAcAIM17Cw/view?utm_content=DAGmzn56phI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf519faea9b" target="_blank"><img src="https://img.shields.io/badge/Apresentação PDF-FFFFFF?&style=for-the-badge&logo=Canva&logoColor=000000"></a>
  <a href="https://www.canva.com/design/DAGV6NnPNY0/8DY3YfCoRzvQSBId8KBvaQ/view?utm_content=DAGV6NnPNY0&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank"><img src="https://img.shields.io/badge/Apresentação Vídeo-FFFFFF?style=for-the-badge&logo=Google-chrome&logoColor=000000"></a>
</div>

---

## 📚 Sumário

- [✨ Objetivo da Startup](#-objetivo-da-startup)
- [❓ Qual problema queremos resolver?](#-qual-problema-queremos-resolver)
- [👥 Público-alvo](#-público-alvo)
- [💡 Qual serviço ou produto oferecemos?](#-qual-serviço-ou-produto-oferecemos)
- [🔧 Tecnologias Utilizadas no Projeto](#-tecnologias-utilizadas-no-projeto)
- [📁 Como executar o projeto localmente?](#-como-executar-o-projeto-localmente)
- [✨ Desenvolvedoras do Projeto](#-desenvolvedoras-do-projeto)

---

## ✨ Objetivo da Startup

O Style Weather busca ser um auxiliador de estilo prático e confiável, ajudando o usuário a se sentir bem, confortável e confiante com sua escolha de roupa, em qualquer ocasião.

## ❓ Qual problema queremos resolver?

Muitas pessoas têm dificuldade na hora de escolher a roupa ideal para sair de casa, especialmente quando o clima está instável ou quando não conhecem bem o ambiente em que estarão. Essa indecisão pode resultar em desconforto, inadequação ou até frustração. Pensando nisso, a Style Weather desenvolveu uma solução.

## 👥 Público-alvo

Nossa aplicação é voltada para jovens e adultos que sempre olham a previsão do tempo antes de se vestir. Aos que valorizam praticidade e estilo no dia a dia. Pessoas com rotinas agitadas, compromissos variados e que querem se vestir de forma adequada ao clima e ao ambiente.

## 💡 Qual serviço ou produto oferecemos?

Oferecemos uma aplicação web que é capaz de sugerir looks personalizados, combinando:

- Preferência ao tipo de roupa (femininas, masculinas e neutras);
- O clima atual e previsto de uma cidade selecionada;
- O lugar escolhido pelo usuário (academia, praia, restaurante, etc).

🔗 Acesse a aplicação: [styleweather.vercel.app](https://styleweather.vercel.app/)

---

## 🔧 Tecnologias Utilizadas no Projeto

### ⚛ React.js
- Biblioteca JavaScript para construção da interface de forma componente reutilizável.

- Permitiu Organizar a interface em componentes (Navbar, CardRoupas, FormularioLogin, etc.).

- Utiliza JSX (JavaScript + HTML) para criar a UI de forma declarativa.

- Manipula estado com useState, useEffect, etc., para interações dinâmicas e reativas.

### ⚡ Vite
- Biblioteca JavaScript para construção da interface de forma componente reutilizável.

- Permitiu Organizar a interface em componentes (Navbar, CardRoupas, FormularioLogin, etc.).

- Utiliza JSX (JavaScript + HTML) para criar a UI de forma declarativa.

- Manipula estado com useState, useEffect, etc., para interações dinâmicas e reativas.

### 🎨 CSS Modules
- CSS Modules permitiu estilos com escopo local por componente.

- Evitou conflitos de classe como  ter apenas .container global controlando tudo.

### 🔽 React-select
- React-select é uma biblioteca para React em que criamos componentes de seleção (dropdowns) altamente customizáveis e acessíveis.

### 📦 React-icons
- React-icons é uma biblioteca que oferece ícones prontos de diversos pacotes (como Font Awesome, Material Icons, entre outros) que foram utilizados no projeto.
  
### ❗ SweetAlert2
- O SweetAlert2 é uma biblioteca JavaScript que foi usada para exibir alertas personalizados e estilizados, substituindo os alertas nativos do navegador (alert(), confirm(), etc.).

### 📍 OpenWeather API
- Fornece dados meteorológicos em tempo real para a aplicação.

- Disponibilizou dados que foram tratados e exibem a previsão do tempo de uma cidade selecionada na interface.

### 🧏 VLibras API
- Ferramenta de acessibilidade que traduz automaticamente conteúdos escritos para Libras (Língua Brasileira de Sinais).

- Torna o sistema mais inclusivo para usuários com deficiência auditiva.

- Integração feita com o widget oficial, que pode ser inserido diretamente no HTML ou via componente React.

### 🔥 Firebase
- Utilizado para funcionalidades como:

- Hospedagem de imagens (foto de perfil, por exemplo).

- Autenticação de usuários (login com e-mail e senha).

- Integração simples com o React por meio de SDKs.

### ▲ Vercel
- Plataforma de deploy e hospedagem contínua utilizada para publicar a aplicação, com suporte para projetos Vite + React, gerenciamento de variáveis de ambiente e integração com GitHub.

---

## 📁 Como executar o projeto localmente?

# 📁 Como executar o projeto localmente

## 1. Clone o repositório

```bash
git clone https://github.com/Lehguanaes/Style_Weather
cd Style_Weather
```

## 2. Instale as dependências

```bash
npm install
```

## 3. Instale as seguintes bibliotecas

```bash
## Instale as seguintes bibliotecas:
npm install react-icons
npm install sweetalert2
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
```

## 4. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
# OpenWeather API
VITE_OPENWEATHER_API_KEY=
VITE_OPENWEATHER_API_URL=
VITE_OPENWEATHER_ICON_URL=

# Firebase Config
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=

# VLibras Config
VITE_VLIBRAS_SCRIPT_URL=https://vlibras.gov.br/app/vlibras-plugin.js
VITE_VLIBRAS_WIDGET_URL=https://vlibras.gov.br/app 
```

## 5. Após a instalação, execute um dos comandos a seguir para abrir o projeto:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

## 6. Acesse no navegador

Abra o endereço disponibilizado para visualizar o projeto.




## ✨ Desenvolvedoras do Projeto

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/J0vana23">
        <img src="https://github.com/user-attachments/assets/ca606409-68d7-4456-9bdb-9fceb913fcdb" width="135px;" alt="Jovana - Github"/><br>
        <sub><b>Jovana Oliveira</b></sub><br>
      </a>
      <sub>
        <a href="mailto:jovana.silva01@etec.sp.gov.br">jovana.silva01@etec.sp.gov.br</a>
      </sub><br>
      <sub>
        <a href="mailto:jovanaoliveira230807@gmail.com">jovanaoliveira230807@gmail.com</a>
      </sub>
    </td>
    <td align="center">
      <a href="https://github.com/Kakventura">
        <img src="https://avatars.githubusercontent.com/u/125403596?v=4" width="135px;" alt="Karinne Angelo - Github"/><br>
        <sub><b>Karinne Angelo</b></sub><br>
      </a>
      <sub>
        <a href="mailto:kakaangelo25@gmail.com">kakaangelo25@gmail.com</a>
      </sub><br>
      <sub>
        <a href="mailto:karinne.ventura@etec.sp.gov.br">karinne.ventura@etec.sp.gov.br</a>
      </sub>
    </td>
    <td align="center">
      <a href="https://github.com/Lehguanaes">
        <img src="https://avatars.githubusercontent.com/u/125403978?v=4" width="135px;" alt="Letícia - Github"/><br>
        <sub><b>Letícia Guanaes</b></sub><br>
      </a>
      <sub>
        <a href="mailto:lehguanaes@gmail.com">lehguanaes@gmail.com</a>
      </sub><br>
      <sub>
        <a href="mailto:leticia.moreira66@etec.sp.gov.br">leticia.moreira66@etec.sp.gov.br</a>
      </sub>
    </td>
    <td align="center">
      <a href="https://github.com/dudinhxzs">
        <img src="https://avatars.githubusercontent.com/u/125403489?v=4" width="135px;" alt="Maria - Github"/><br>
        <sub><b>Maria Eduarda</b></sub><br>
      </a>
      <sub>
        <a href="mailto:monteiroviana2@gmail.com">monteiroviana2@gmail.com</a>
      </sub><br>
      <sub>
        <a href="mailto:maria.viana57@etec.sp.gov.br">maria.viana57@etec.sp.gov.br</a>
      </sub>
    </td>
  </tr>
</table>

<h3 align="center">
 "𝑽𝒊𝒔𝒕𝒂-𝒔𝒆 𝒄𝒐𝒎 𝒐 𝒕𝒆𝒎𝒑𝒐 𝒂 𝒔𝒆𝒖 𝒇𝒂𝒗𝒐𝒓!"
</h3>

<h3 align="center">
 __________________
  
</h3>
