import Post from '@domains/Post';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeletePostUseCase {
  constructor(@inject('IPostRepository') private postRepository: IRepository<Post>) {}

  async execute(post: Post): Promise<void> {
    await this.postRepository.delete(post.id);
  }
}

export default DeletePostUseCase;
