import User from '@domains/User';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdateUserUseCase {
  constructor(@inject('IUserRepository') private userRepository: IRepository<User>) {}

  async execute(id: string, user: User): Promise<User | null> {
    return this.userRepository.update(id, user);
  }
}

export default UpdateUserUseCase;
