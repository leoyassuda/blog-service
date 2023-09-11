"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const PostController_1 = __importDefault(require("@controllers/PostController"));
const PostRepository_1 = __importDefault(require("@repositories/post/PostRepository"));
const UserRepository_1 = __importDefault(require("@repositories/user/UserRepository"));
const CreatePostUseCase_1 = __importDefault(require("@useCases/post/CreatePostUseCase"));
const DeletePostUseCase_1 = __importDefault(require("@useCases/post/DeletePostUseCase"));
const GetAllPostsUseCase_1 = __importDefault(require("@useCases/post/GetAllPostsUseCase"));
const GetPostByIdUseCase_1 = __importDefault(require("@useCases/post/GetPostByIdUseCase"));
const UpdatePostUseCase_1 = __importDefault(require("@useCases/post/UpdatePostUseCase"));
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
tsyringe_1.container.register('IPostRepository', PostRepository_1.default);
tsyringe_1.container.register('IUserRepository', UserRepository_1.default);
tsyringe_1.container.register('CreatePostUseCase', {
    useClass: CreatePostUseCase_1.default,
});
tsyringe_1.container.register('GetAllPostsUseCase', {
    useClass: GetAllPostsUseCase_1.default,
});
tsyringe_1.container.register('GetPostByIdUseCase', {
    useClass: GetPostByIdUseCase_1.default,
});
tsyringe_1.container.register('UpdatePostUseCase', {
    useClass: UpdatePostUseCase_1.default,
});
tsyringe_1.container.register('DeletePostUseCase', {
    useClass: DeletePostUseCase_1.default,
});
tsyringe_1.container.register('PostController', {
    useClass: PostController_1.default,
});
