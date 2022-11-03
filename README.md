NLW Copa


# Server

## Tecnologias :
    
- Fastify - roteamento (substitui o express)


- Prisma - orm 

- ERD - gera diagrama de entidade e relacionamento

## Comandos

    npm init -y 

    npm i typescript -D

    npm i fastify

    npm i tsx -D

    npm i prisma -D

    npm i @prisma/client

    npm prisma init --datasource-provider SQLite

    npm i prisma-erd-generator @mermaid-js/mermaid-cli -D

    npx prisma generate

    npm i @fastify/cors


criar no `package.json` o script:
    
    "dev": "tsx watch src/server.ts

para rodar :

    npm run dev


criar migrate :
    
    npx prisma migrate dev

### obs: **erd só funciona se no caminho das pastas não tiver espaço**


# Web

## Tecnologias : 

- Next.js - server-side rendering


## Comandos :

    npx create-next-app@latest --use-npm


### qualquer arquivo que criar dentro da pasta `pages` será uma rota web
- o arquivo `index.tsx` é o equivalente ao `localhost:3000`

# Mobile

## Tecnologias :

- React Native 

- NativeBase

## Comandos

    npx react-native init MyApp --template react-native-template-typescript

    yarn add native-base react-native-svg@12.1.1 react-native-safe-area-context@3.3.2


### instalar fontes personalizadas - acho que funciona para iOS tb

- baixa a font desejada do `google fonts`

- cria na raiz do porjeto o caminho `assets/fonts` e cola as fonts

- cria na raiz do projeto um arquivo chamado `react-native.config.js` e adiciona o seguinte código: 

```
module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ["./assets/fonts/"],
}
```

- rodar o comando para relacionar as fonts para android (e iOS) 

```
npx react-native-asset
```
