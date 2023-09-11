import UserController from '@controllers/UserController';
import { Router } from 'express';

const postRouter = Router();

const controller = new UserController();

postRouter.post('/users', controller.create);

postRouter.get('/users', controller.findAll);

postRouter.get('/users/:id', controller.findById);

postRouter.put('/users/:id', controller.update);

postRouter.delete('/users/:id', controller.delete);

export default postRouter;
