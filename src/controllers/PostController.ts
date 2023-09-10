import { Request, Response } from 'express';
import CreatePostUseCase from '@useCases/CreatePostUseCase';
import GetPostByIdUseCase from '@useCases/GetPostByIdUseCase';
import GetAllPostsUseCase from '@useCases/GetAllPostsUseCase';
import UpdatePostUseCase from '@useCases/UpdatePostUseCase';
import DeletePostUseCase from '@useCases/DeletePostUseCase';
import { inject, injectable } from 'tsyringe';

@injectable()
class PostController {
  constructor(
    @inject('CreatePostUseCase') private createPostUseCase: CreatePostUseCase,
    @inject('GetPostByIdUseCase') private getPostByIdUseCase: GetPostByIdUseCase,
    @inject('GetAllPostsUseCase') private getAllPostsUseCase: GetAllPostsUseCase,
    @inject('UpdatePostUseCase') private updatePostUseCase: UpdatePostUseCase,
    @inject('DeletePostUseCase') private deletePostUseCase: DeletePostUseCase
  ) {}

  async getAll(req: Request, res: Response) {
    console.log('>>>> Post Get All Controller');
    const posts = await this.getAllPostsUseCase.execute();
    res.json(posts);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const post = await this.getPostByIdUseCase.execute(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({
        error: 'Post not found',
      });
    }
  }

  async create(req: Request, res: Response) {
    const postRequest = req.body;
    const post = await this.createPostUseCase.execute(postRequest);
    res.json(post);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const postRequest = req.body;
    const post = await this.updatePostUseCase.execute(id, postRequest);
    res.json(post);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.body;
    await this.deletePostUseCase.execute(id);
    res.status(204).send();
  }
}

export default PostController;
