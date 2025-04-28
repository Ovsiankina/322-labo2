export class Comment {
  constructor(
    public body: string,
    public userId: number,
    public createdAt: Date
  ) {}
}
