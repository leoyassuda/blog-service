import UserController from '@controllers/users/UserController';
import { Router } from 'express';

const userRouter = Router();

const controller = new UserController();

userRouter.post('/', controller.create);

userRouter.get('/', controller.findAll);

userRouter.get('/:id', controller.findById);

userRouter.put('/:id', controller.update);

userRouter.delete('/:id', controller.delete);

export default userRouter;
