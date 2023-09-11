import User from '@domains/User';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetAllUsersUseCase {
  constructor(@inject('IUserRepository') private userRepository: IRepository<User>) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}

export default GetAllUsersUseCase;
