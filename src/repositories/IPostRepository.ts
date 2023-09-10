import Post from '../domains/Post';

interface IPostRepository {
  createPost(post: Post): Promise<Post>;
  findAllPosts(): Promise<Post[]>;
  findPostById(id: string): Promise<Post | null>;
  updatePost(id: string, post: Post): Promise<Post | null>;
  deletePost(id: string): Promise<void>;
}

export default IPostRepository;
