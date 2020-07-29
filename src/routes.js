import { Router } from 'express'; // Importar apenas o módulo de rotas do express
import UserController from './app/controllers/UserController';
import HelpController from './app/controllers/HelpController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/users/:user_id/helps', HelpController.store);
export default routes;
