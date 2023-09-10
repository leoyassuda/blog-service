import User from './User';

export default class Post {
  constructor(
    public id: string,
    public text: string,
    public author: User,
    public createdAt?: Date
  ) {}
}
