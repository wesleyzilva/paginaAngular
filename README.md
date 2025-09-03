PaginaAngular
Este projeto é uma evolução da arquitetura de uma aplicação web, demonstrando a transição para um ecossistema Angular moderno com componentes standalone e a implementação de Server-Side Rendering (SSR) com Node.js.

O objetivo é servir tanto como portfólio quanto como um modelo técnico. Ele foi projetado para transferir conhecimento para desenvolvedores juniores e QAs, com a intenção de praticar o desenvolvimento de aplicações web modernas. O código está separado por branches evolutivas no GitHub.

Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento local, use o comando:

ng serve

A aplicação será aberta em http://localhost:4200/. Ela recarrega automaticamente sempre que você modifica um arquivo.

Server-Side Rendering (SSR)
Para rodar a aplicação com SSR usando o servidor Node.js, você precisa primeiro construir a aplicação e depois iniciar o servidor.

Construir a aplicação:

npm run build

Iniciar o servidor:

npm run serve:ssr:paginaAngular

A aplicação com SSR estará disponível em http://localhost:4000/.

Scaffolding de Código
O Angular CLI inclui ferramentas poderosas para gerar código. Para criar um novo componente, use o comando:

ng generate component nome-do-componente

Para ver a lista completa de schematics (como components, directives ou pipes), execute:

ng generate --help

Construção para Produção
Para compilar o projeto para produção, use o comando:

ng build

Este comando compila o projeto e salva os arquivos de build no diretório dist/. Por padrão, o build de produção otimiza a aplicação para melhor performance e velocidade.

Testes
Para executar os testes unitários com o Karma, use o seguinte comando:

ng test

Recursos Adicionais
Para mais informações sobre o uso do Angular CLI, incluindo referências detalhadas de comandos, visite a página Angular CLI Overview and Command Reference.