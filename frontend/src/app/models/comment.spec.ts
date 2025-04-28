import { Comment } from './comment';

describe('Comment', () => {
  it('should create an instance', () => {
    expect(new Comment('test', 1, new Date())).toBeTruthy();
  });
});
