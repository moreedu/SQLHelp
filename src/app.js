/* eslint-disable new-cap */
// Este é o arquivo da estrutura da aplicação com os middlewares e Rotas
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';

import routes from './routes';

import './database'; // importando o index da pasta database

class app {
  constructor() {
    this.server = express();

    // Se eu não inserir no constructor nunca irão rodar tanto middlewares como as rotasyar
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // Requisições serem chamadas no formato Json
  }

  routes() {
    this.server.use(routes); // Chamando as rotas, em forma de middlewares com .use
  }
}

export default new app().server;
