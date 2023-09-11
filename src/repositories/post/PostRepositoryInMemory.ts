import Post from '@domains/Post';
import { injectable } from 'tsyringe';
import IRepository from '../IRepository';
import { v4 as uuidv4 } from 'uuid';

@injectable()
class PostRepositoryInMemory implements IRepository<Post> {
  private posts: Post[] = [
    {
      id: uuidv4(),
      text: '',
    },
  ];

  create(post: Post): Promise<Post> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }
  findById(id: string): Promise<Post | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, post: Post): Promise<Post | null> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default PostRepositoryInMemory;
