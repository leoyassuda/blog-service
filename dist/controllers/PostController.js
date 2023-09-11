"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreatePostUseCase_1 = __importDefault(require("@useCases/post/CreatePostUseCase"));
const DeletePostUseCase_1 = __importDefault(require("@useCases/post/DeletePostUseCase"));
const GetAllPostsUseCase_1 = __importDefault(require("@useCases/post/GetAllPostsUseCase"));
const GetPostByIdUseCase_1 = __importDefault(require("@useCases/post/GetPostByIdUseCase"));
const UpdatePostUseCase_1 = __importDefault(require("@useCases/post/UpdatePostUseCase"));
class PostController {
    async create(req, res) {
        const createPostUseCase = tsyringe_1.container.resolve(CreatePostUseCase_1.default);
        const postRequest = req.body;
        const post = await createPostUseCase.execute(postRequest);
        res.json(post);
    }
    async findAll(req, res) {
        const getAllPostsUseCase = tsyringe_1.container.resolve(GetAllPostsUseCase_1.default);
        const posts = await getAllPostsUseCase.execute();
        res.json(posts);
    }
    async findById(req, res) {
        const getPostByIdUseCase = tsyringe_1.container.resolve(GetPostByIdUseCase_1.default);
        const { id } = req.params;
        const post = await getPostByIdUseCase.execute(id);
        if (post) {
            res.json(post);
        }
        else {
            res.status(404).json({
                error: 'Post not found',
            });
        }
    }
    async update(req, res) {
        const updatePostUseCase = tsyringe_1.container.resolve(UpdatePostUseCase_1.default);
        const { id } = req.params;
        const postRequest = req.body;
        const post = await updatePostUseCase.execute(id, postRequest);
        res.json(post);
    }
    async delete(req, res) {
        const deletePostUseCase = tsyringe_1.container.resolve(DeletePostUseCase_1.default);
        const { id } = req.body;
        await deletePostUseCase.execute(id);
        res.status(204).send();
    }
}
exports.default = PostController;
