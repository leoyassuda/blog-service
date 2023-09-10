import Post from '@domains/Post';
import IPostRepository from './IPostRepository';
import { PrismaClient } from '@prisma/client';
import { injectable } from 'tsyringe';
import prisma from 'infrastructure/database';

@injectable()
class PostRepository implements IPostRepository {
  private prismaClient: PrismaClient = prisma;

  constructor() {}

  async createPost(post: Post): Promise<Post> {
    const { text, author } = post;
    const createdPost = this.prismaClient.post.create({
      data: {
        text,
        author: {
          create: {
            name: author.name,
            nickname: author.nickname,
          },
        },
      },
      include: {
        author: true,
      },
    });
    return createdPost;
  }
  async findAllPosts(): Promise<Post[]> {
    console.log('>>>>> Find All Posts');
    return this.prismaClient.post.findMany({
      include: {
        author: true,
      },
    });
  }
  async findPostById(id: string): Promise<Post | null> {
    throw new Error('Method not implemented.');
  }
  async updatePost(id: string, post: Post): Promise<Post | null> {
    throw new Error('Method not implemented.');
  }
  async deletePost(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default PostRepository;
