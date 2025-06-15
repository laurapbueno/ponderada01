# 🎴 Jogo inspirado em Balatro

Aplicativo mobile desenvolvido com **React Native + Expo**, inspirado no jogo *Balatro*. O objetivo é criar uma mão de cartas, aplicar modificadores e somar pontos com base em regras dinâmicas.

Este projeto foi desenvolvido como atividade avaliativa da disciplina de Desenvolvimento Mobile.

---

## 🚀 Funcionalidades

- 🃏 Geração aleatória de cartas
- 🧠 Aplicação de modificadores estratégicos
- 📲 Interface responsiva com navegação em abas
- 💬 Exibição da pontuação final com modificador aplicado
- ♻️ Nova mão a cada rodada
- 🧩 Contexto global com `React Context API`

---

## 🛠️ Tecnologias utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [expo-router](https://expo.github.io/router/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Context API](https://reactjs.org/docs/context.html)

---

## 📦 Como executar o projeto

### Pré-requisitos

- Node.js instalado
- Expo CLI (`npm install -g expo-cli`)
- Um emulador Android/iOS ou o app Expo Go

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repo-balatro.git

# Acesse o diretório
cd seu-repo-balatro

# Instale as dependências
npm install

# Inicie o app
npx expo start

```

```bash

app/
├── (tabs)/                # Rotas com navegação por abas
│   ├── index.tsx          # Tela inicial
│   ├── game.tsx           # Tela do jogo
│   └── modifiers.tsx      # Tela de seleção de modificadores
├── screens/               # Componentes de tela
├── components/            # Componentes reutilizáveis
├── services/              # Mock de dados e lógica de jogo
├── context/               # Contexto global com GameProvider
├── types/                 # Tipagens compartilhadas

```