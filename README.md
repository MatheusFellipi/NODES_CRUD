# CRUD 

O projeto e um CRUD basico 

## Iniciar o Projeto

* npm install ou yarn.
* OBs: fazer na pasta api tambem para instalar todos as dependencia.

### `yarn ou npm start`

Iniciara a api no [http://localhost:3333](http://localhost:3333) e o front na [http://localhost:3000](http://localhost:3000);

Precisara iniciar o server na pasta api com npm start ou yarn o mesmo com o front



### sobre a api
o DataBase foi em psql postgres para usar outro database voce pode configurar no knexfile em deelopment mais para isso tem que baixar as pacote do database.
tem que criar o Database(orcamento).

* depois da configuraçao do banco;

* no termina
* npx knex migrate:lastet (vai criar o as tabelas no banco);
* npx knex seed:run (vai colocar valores no banco);



