import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncFunc';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId.test', () => {
  test('success get comment', async () => {
    const comment = {
      id: '1',
      text: 'some comment',
      articleId: '1',
      userId: {
        avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/4120518/pub_60d736e753b1df70c252e972_60d737139051453050c622b7/scale_1200',
        id: '1',
        password: '123',
        role: 'ADMIN',
        username: 'admin',
      },
    };
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comment }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comment);
  });

  test('error get comment', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
