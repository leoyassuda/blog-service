import { Router } from 'express';
import PostController from '@controllers/PostController';

const postRouter = Router();

const postController = new PostController();

postRouter.post('/posts', postController.create);

postRouter.get('/posts', postController.getAll);

postRouter.get('/posts/:id', postController.getById);

postRouter.put('/posts/:id', postController.update);

postRouter.delete('/posts/:id', postController.delete);

export default postRouter;
