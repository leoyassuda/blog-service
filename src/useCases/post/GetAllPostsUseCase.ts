import Post from '@domains/Post';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetAllPostsUseCase {
  constructor(@inject('IPostRepository') private postRepository: IRepository<Post>) {}

  async execute(): Promise<Post[]> {
    return this.postRepository.findAll();
  }
}

export default GetAllPostsUseCase;
