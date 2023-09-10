import { Router } from 'express';
import { container } from 'tsyringe';
import PostController from '@controllers/PostController';
import GetAllPostsUseCase from '@useCases/GetAllPostsUseCase';

// export default function PostsRouter() {
const postRouter = Router();

console.log('>>>> router postRouter');

const postController = container.resolve(PostController);

postRouter.post('/posts', postController.create);

postRouter.get('/posts', postController.getAll);

postRouter.get('/posts/:id', postController.getById);

postRouter.put('/posts/:id', postController.update);

postRouter.delete('/posts/:id', postController.delete);

postRouter.get('/asd', (req, res) => {
  res.send('ASD');
});

// }

export default postRouter;
