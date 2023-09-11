import { Router } from 'express';
import UserController from '@controllers/UserController';

const postRouter = Router();

const controller = new UserController();

postRouter.post('/users', controller.create);

postRouter.get('/users', controller.getAll);

postRouter.get('/users/:id', controller.getById);

postRouter.put('/users/:id', controller.update);

postRouter.delete('/users/:id', controller.delete);

export default postRouter;
