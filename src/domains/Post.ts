import User from './User';

export default class Post {
  constructor(
    public id: string,
    public text: string,
    public user?: User,
    public createdAt?: Date
  ) {}
}
