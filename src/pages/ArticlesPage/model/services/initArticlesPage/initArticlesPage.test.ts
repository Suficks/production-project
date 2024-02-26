import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncFunc';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

const searchParams = new URLSearchParams(window.location.search);
searchParams.set('sort', 'title');
searchParams.set('order', 'asc');
searchParams.set('search', 'scala');

describe('initArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(7);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });

  test('error with _inited: true', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
