import { PrismaClient } from '@prisma/client';
import { injectable } from 'tsyringe';
import prisma from 'src/infrastructure/database';
import User from '@domains/User';
import IRepository from '@repositories/IRepository';

@injectable()
class UserRepository implements IRepository<User> {
  private prismaClient: PrismaClient = prisma;

  constructor() {}

  async create(user: User): Promise<User> {
    const { name, nickname } = user;
    const createdUser = this.prismaClient.user.create({
      data: {
        name,
        nickname,
      },
    });
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.prismaClient.user.findMany({});
  }

  async findById(id: string): Promise<User | null> {
    return this.prismaClient.user.findFirst({
      where: {
        id,
      },
      include: { posts: true },
    });
  }

  async update(id: string, user: User): Promise<User | null> {
    const { name, nickname } = user;
    return this.prismaClient.user.update({
      where: {
        id,
      },

      data: {
        name,
        nickname,
      },
    });
  }

  async delete(id: string): Promise<void> {
    this.prismaClient.user.delete({
      where: {
        id,
      },
    });
  }
}

export default UserRepository;
