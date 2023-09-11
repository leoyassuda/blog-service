import User from '@domains/User';
import IRepository from '@repositories/IRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteUserUseCase {
  constructor(@inject('IUserRepository') private userRepository: IRepository<User>) {}

  async execute(user: User): Promise<void> {
    await this.userRepository.delete(user.id);
  }
}

export default DeleteUserUseCase;
