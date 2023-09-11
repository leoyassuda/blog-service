import User from '@domains/User';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetUserByIdUseCase {
  constructor(@inject('IUserRepository') private userRepository: IRepository<User>) {}

  async execute(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }
}

export default GetUserByIdUseCase;
