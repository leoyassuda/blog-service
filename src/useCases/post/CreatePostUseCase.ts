import Post from '@domains/Post';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreatePostUseCase {
  constructor(@inject('IPostRepository') private postRepository: IRepository<Post>) {}

  async execute(post: Post): Promise<Post> {
    return this.postRepository.create(post);
  }
}

export default CreatePostUseCase;
