import { container } from 'tsyringe';
import CreatePostUseCase from '@useCases/CreatePostUseCase';
import GetAllPostsUseCase from '@useCases/GetAllPostsUseCase';
import GetPostByIdUseCase from '@useCases/GetPostByIdUseCase';
import UpdatePostUseCase from '@useCases/UpdatePostUseCase';
import DeletePostUseCase from '@useCases/DeletePostUseCase';
import PostRepository from '@repositories/PostRepository';
import PostController from '@controllers/PostController';
import IPostRepository from '@repositories/IPostRepository';

container.register<IPostRepository>('IPostRepository', PostRepository);

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
