import Post from '@domains/Post';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetPostByIdUseCase {
  constructor(@inject('IPostRepository') private postRepository: IRepository<Post>) {}

  async execute(id: string): Promise<Post | null> {
    return this.postRepository.findById(id);
  }
}

export default GetPostByIdUseCase;
