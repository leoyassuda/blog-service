import PostController from '@controllers/PostController';
import Post from '@domains/Post';
import User from '@domains/User';
import IRepository from '@repositories/IRepository';
import PostRepository from '@repositories/post/PostRepository';
import UserRepository from '@repositories/user/UserRepository';
import CreatePostUseCase from '@useCases/post/CreatePostUseCase';
import DeletePostUseCase from '@useCases/post/DeletePostUseCase';
import GetAllPostsUseCase from '@useCases/post/GetAllPostsUseCase';
import GetPostByIdUseCase from '@useCases/post/GetPostByIdUseCase';
import UpdatePostUseCase from '@useCases/post/UpdatePostUseCase';
import { container } from 'tsyringe';

container.register<IRepository<Post>>('IPostRepository', PostRepository);

container.register<IRepository<User>>('IUserRepository', UserRepository);

container.register('CreatePostUseCase', {
  useClass: CreatePostUseCase,
});

container.register('GetAllPostsUseCase', {
  useClass: GetAllPostsUseCase,
});

container.register('GetPostByIdUseCase', {
  useClass: GetPostByIdUseCase,
});

container.register('UpdatePostUseCase', {
  useClass: UpdatePostUseCase,
});

container.register('DeletePostUseCase', {
  useClass: DeletePostUseCase,
});

container.register('PostController', {
  useClass: PostController,
});
