import Post from '@domains/Post';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdatePostUseCase {
  constructor(@inject('IPostRepository') private postRepository: IRepository<Post>) {}

  async execute(id: string, post: Post): Promise<Post | null> {
    return this.postRepository.update(id, post);
  }
}

export default UpdatePostUseCase;
