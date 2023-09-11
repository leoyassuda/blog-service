import User from '@domains/User';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateUserUseCase {
  constructor(@inject('IUserRepository') private userRepository: IRepository<User>) {}

  async execute(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}

export default CreateUserUseCase;
