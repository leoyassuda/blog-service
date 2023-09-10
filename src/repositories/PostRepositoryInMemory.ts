import Post from '@domains/Post';
import IPostRepository from './IPostRepository';
import { injectable } from 'tsyringe';

@injectable()
class PostRepositoryInMemory implements IPostRepository {
  private posts: Post[] = [];

  createPost(post: Post): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  findAllPosts(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }
  findPostById(id: string): Promise<Post | null> {
    throw new Error('Method not implemented.');
  }
  updatePost(id: string, post: Post): Promise<Post | null> {
    throw new Error('Method not implemented.');
  }
  deletePost(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default PostRepositoryInMemory;
