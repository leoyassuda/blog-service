import Post from '@domains/Post';
import IPostRepository from '@repositories/IPostRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetAllPostsUseCase {
  constructor(@inject('IPostRepository') private postRepository: IPostRepository) {}

  async execute(): Promise<Post[]> {
    console.log('>>>> Get All Posts Use Case:');
    return this.postRepository.findAllPosts();
  }
}

export default GetAllPostsUseCase;
