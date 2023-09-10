import Post from '@domains/Post';
import IPostRepository from '@repositories/PostRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdatePostUseCase {
  constructor(@inject('IPostRepository') private postRepository: IPostRepository) {}

  async execute(id: string, post: Post): Promise<Post | null> {
    return this.postRepository.updatePost(id, post);
  }
}

export default UpdatePostUseCase;
