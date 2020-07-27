import { Router } from 'express'; // Importar apenas o módulo de rotas do express

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store); // o /users é o endereço que insiro no insomia
routes.get('/users', UserController.index);

export default routes;
