import PostController from '@controllers/posts/PostController';
import { Router } from 'express';

const postRouter = Router();

const postController = new PostController();

postRouter.post('/', postController.create);

postRouter.get('/', postController.findAll);

postRouter.get('/:id', postController.findById);

postRouter.put('/:id', postController.update);

postRouter.delete('/:id', postController.delete);

export default postRouter;
