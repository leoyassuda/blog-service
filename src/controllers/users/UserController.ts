import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserUseCase from '@useCases/user/CreateUserUseCase';
import DeleteUserUseCase from '@useCases/user/DeleteUserUseCase';
import GetAllUsersUseCase from '@useCases/user/GetAllUsersUseCase';
import GetUserByIdUseCase from '@useCases/user/GetUserByIdUseCase';
import UpdateUserUseCase from '@useCases/user/UpdateUserUseCase';
import { IController } from '../IController';

class UserController implements IController {
  async create(req: Request, res: Response): Promise<void> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const userRequest = req.body;
    const user = await createUserUseCase.execute(userRequest);
    res.json(user);
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const getAllUsersUseCase = container.resolve(GetAllUsersUseCase);
    const users = await getAllUsersUseCase.execute();
    res.json(users);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);
    const { id } = req.params;
    const user = await getUserByIdUseCase.execute(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({
        error: 'User not found',
      });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const { id } = req.params;
    const userRequest = req.body;
    const user = await updateUserUseCase.execute(id, userRequest);
    res.json(user);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    const { id } = req.params;
    await deleteUserUseCase.execute(id);
    res.status(204).send();
  }
}

export default UserController;
