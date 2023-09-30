import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePostUseCase from '@useCases/post/CreatePostUseCase';
import DeletePostUseCase from '@useCases/post/DeletePostUseCase';
import GetAllPostsUseCase from '@useCases/post/GetAllPostsUseCase';
import GetPostByIdUseCase from '@useCases/post/GetPostByIdUseCase';
import UpdatePostUseCase from '@useCases/post/UpdatePostUseCase';
import { IController } from '@controllers/IController';

class PostController implements IController {
  async create(req: Request, res: Response): Promise<void> {
    const createPostUseCase = container.resolve(CreatePostUseCase);
    const postRequest = req.body;
    const post = await createPostUseCase.execute(postRequest);
    res.json(post);
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const getAllPostsUseCase = container.resolve(GetAllPostsUseCase);
    const posts = await getAllPostsUseCase.execute();
    res.json(posts);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const getPostByIdUseCase = container.resolve(GetPostByIdUseCase);
    const { id } = req.params;
    const post = await getPostByIdUseCase.execute(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({
        error: 'Post not found',
      });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const updatePostUseCase = container.resolve(UpdatePostUseCase);
    const { id } = req.params;
    const postRequest = req.body;
    const post = await updatePostUseCase.execute(id, postRequest);
    res.json(post);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const deletePostUseCase = container.resolve(DeletePostUseCase);
    const { id } = req.body;
    await deletePostUseCase.execute(id);
    res.status(204).send();
  }
}

export default PostController;
