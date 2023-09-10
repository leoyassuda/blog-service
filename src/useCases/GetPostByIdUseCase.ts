import Post from '@domains/Post';
import IPostRepository from '@repositories/PostRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetPostByIdUseCase {
  constructor(@inject('IPostRepository') private postRepository: IPostRepository) {}

  async execute(id: string): Promise<Post | null> {
    return this.postRepository.findPostById(id);
  }
}

export default GetPostByIdUseCase;
