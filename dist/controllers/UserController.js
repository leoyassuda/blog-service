"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateUserUseCase_1 = __importDefault(require("@useCases/user/CreateUserUseCase"));
const DeleteUserUseCase_1 = __importDefault(require("@useCases/user/DeleteUserUseCase"));
const GetAllUsersUseCase_1 = __importDefault(require("@useCases/user/GetAllUsersUseCase"));
const GetUserByIdUseCase_1 = __importDefault(require("@useCases/user/GetUserByIdUseCase"));
const UpdateUserUseCase_1 = __importDefault(require("@useCases/user/UpdateUserUseCase"));
class UserController {
    async create(req, res) {
        const createUserUseCase = tsyringe_1.container.resolve(CreateUserUseCase_1.default);
        const userRequest = req.body;
        const user = await createUserUseCase.execute(userRequest);
        res.json(user);
    }
    async findAll(req, res) {
        const getAllUsersUseCase = tsyringe_1.container.resolve(GetAllUsersUseCase_1.default);
        const users = await getAllUsersUseCase.execute();
        res.json(users);
    }
    async findById(req, res) {
        const getUserByIdUseCase = tsyringe_1.container.resolve(GetUserByIdUseCase_1.default);
        const { id } = req.params;
        const user = await getUserByIdUseCase.execute(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({
                error: 'User not found',
            });
        }
    }
    async update(req, res) {
        const updateUserUseCase = tsyringe_1.container.resolve(UpdateUserUseCase_1.default);
        const { id } = req.params;
        const userRequest = req.body;
        const user = await updateUserUseCase.execute(id, userRequest);
        res.json(user);
    }
    async delete(req, res) {
        const deleteUserUseCase = tsyringe_1.container.resolve(DeleteUserUseCase_1.default);
        const { id } = req.body;
        await deleteUserUseCase.execute(id);
        res.status(204).send();
    }
}
exports.default = UserController;
