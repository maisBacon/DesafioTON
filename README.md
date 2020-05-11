# Visão Geral

TON [Desafio2]

## Responsáveis

- <Renan_Eiras_Melo>

## Docker Instalação

- caso esteja usando um SO diferente de distribuições Debian, você terá a opção de selecionar o SO desejado para instalação do docker.
https://docs.docker.com/engine/install/ubuntu/

## Rodar Docker

- verificar se o docker está instalado `docker help`
  instalando imagem docker postgress
  o link mostra mais informações caso precise
https://hub.docker.com/_/postgres

- executar o comando abaixo para instalação da imagem posgress no docker
docker run --name funcionarios_db -e POSTGRES_PASSWORD=funcionarios_db -p 5432:5432 -d postgres
- `-p` é um direcionamento de porta, caso esteja usando a porta ou queira direcionar para outra porta, basta trocar
- em seguida executar `docker ps` e verificar se o container está rodando
- caso o docker tenha parado e queira reiniciar o banco, executar
docker start funcionarios_db
- logs do docker
docker logs funcionarios_db
- verificar container ativos e não ativos `docker ps -a`

## Postgres

- recomendo usar postbird para visualização de dados do banco
https://www.electronjs.org/apps/postbird
- Ao terminar, por o usuario `postgres` e a senha `funcionarios_db` na porta `5432`
- Ao acessar criar a database `funcionarios`

## Sequelize

- Excutar o comando para criar as tabelas
yarn sequelize db:migrate

- Caso precise excluir alguma tabela, usar:

- dropar última migrate
yarn sequelize db:migrate:undo
- dropar todas as migrates
yarn sequelize db:migrate:undo:all

## Instalar dependencias

- recomendo usar `yarn` mas `npm i` funciona tambem

## Rodando o projeto

- `yarn dev` ou `npm dev`: inicia o servidor em desenvolvimento.
- `yarn start` ou `npm start`: inicia o servidor em produção.

## Rodando DEBUG

- Rodar desenvolvimento com `yarn dev` depois `ctrl + shift + d` para abrir aba debug. Selecionar o arquivo de configuração `Debug` em seguida clickar em `Run`

## Rodando os testes

- `yarn test`

## Postman

- Segue arquivo para importar via postman `TON.postman_collection.json` está na pasta postman na raiz do projeto. Nela contém todas as chamadas da aplicação.
