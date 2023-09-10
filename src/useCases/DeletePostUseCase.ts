import Post from '@domains/Post';
import IPostRepository from '@repositories/PostRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeletePostUseCase {
  constructor(@inject('IPostRepository') private postRepository: IPostRepository) {}

  async execute(post: Post): Promise<void> {
    await this.postRepository.deletePost(post.id);
  }
}

export default DeletePostUseCase;
