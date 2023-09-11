import UserController from '@controllers/UserController';
import { Router } from 'express';

const postRouter = Router();

const controller = new UserController();

postRouter.post('/', controller.create);

postRouter.get('/', controller.findAll);

postRouter.get('/:id', controller.findById);

postRouter.put('/:id', controller.update);

postRouter.delete('/:id', controller.delete);

export default postRouter;
