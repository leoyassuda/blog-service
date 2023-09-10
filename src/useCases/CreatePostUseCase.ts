import Post from '@domains/Post';
import IPostRepository from '@repositories/PostRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(post: Post): Promise<Post> {
    return this.postRepository.createPost(post);
  }
}

export default CreatePostUseCase;
