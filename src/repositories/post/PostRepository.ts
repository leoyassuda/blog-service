import Post from '@domains/Post';
import { PrismaClient } from '@prisma/client';
import { injectable } from 'tsyringe';
import prisma from 'infrastructure/database';
import IRepository from '../IRepository';

@injectable()
class PostRepository implements IRepository<Post> {
  private prismaClient: PrismaClient = prisma;

  constructor() {}

  async create(post: Post): Promise<Post> {
    const { text, user } = post;
    const createdPost = this.prismaClient.post.create({
      data: {
        text,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
      include: {
        user: true,
      },
    });
    return createdPost;
  }

  async findAll(): Promise<Post[]> {
    return this.prismaClient.post.findMany({
      include: {
        user: true,
      },
    });
  }

  async findById(id: string): Promise<Post | null> {
    return this.prismaClient.post.findFirst({
      where: {
        id,
      },
      include: { user: true },
    });
  }

  async update(id: string, post: Post): Promise<Post | null> {
    return this.prismaClient.post.update({
      where: {
        id,
      },
      include: {
        user: false,
      },
      data: {
        text: post.text,
      },
    });
  }

  async delete(id: string): Promise<void> {
    this.prismaClient.post.delete({
      where: {
        id,
      },
    });
  }
}

export default PostRepository;
