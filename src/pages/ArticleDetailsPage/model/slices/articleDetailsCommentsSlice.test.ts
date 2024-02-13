import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const articleDetailsComments = [
  {
    id: '1',
    text: 'some comment',
    user: { id: '1', username: 'Sofia' },
  },
  {
    id: '2',
    text: 'some comment',
    user: { id: '2', username: 'Anton' },
  },
];

describe('articleDetailsCommentsSlice.test', () => {
  test('test fetchCommentsByArticleId service pending', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = {
      isLoading: false,
    };
    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentSchema,
      fetchCommentsByArticleId.pending,
    ))
      .toEqual({
        error: undefined,
        isLoading: true,
      });
  });

  test('test fetchCommentsByArticleId service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = {
      isLoading: true,
    };
    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentSchema,
      fetchCommentsByArticleId.fulfilled(articleDetailsComments, '', ''),
    ))
      .toEqual({
        error: undefined,
        entities: {
          1: {
            id: '1',
            text: 'some comment',
            user: {
              id: '1',
              username: 'Sofia',
            },
          },
          2: {
            id: '2',
            text: 'some comment',
            user: {
              id: '2',
              username: 'Anton',
            },
          },
        },
        ids: ['1', '2'],
        isLoading: false,
      });
  });
});
