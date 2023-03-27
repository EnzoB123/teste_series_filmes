# teste_series_filmes Enzo

# Como rodar a aplicação front-end:

1.Instale a versao mais estável do node.js: https://nodejs.dev/pt/download/

2.Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

3.Faça o clone do repositório da API.

4.Abra o terminal no diretório da API.

5.Execute o comando npm install para instalar as dependências do projeto.

6.Execute o comando "quasar dev" para iniciar o servidor da API. A API deve estar disponível em http://localhost:3000/ ou http://localhost:9000/.

7.Se algo ocorrer errado com o "quasar dev", instale tambem o quasar diretamente: npm install -g @quasar/cli

8.Agora certifique-se que o servidor api está rodando, pode fazer um ping, acessando: http://localhost:3000/ping





--------------------------------------------------------------------------------------------------------------------------


This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
