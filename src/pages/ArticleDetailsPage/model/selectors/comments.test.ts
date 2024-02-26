import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleCommentsIsLoading, getArticleCommentsError } from './comments';

describe('getArticleCommentsIsLoading.test', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          isLoading: true,
        },
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleCommentsError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          error: 'error',
        },
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
