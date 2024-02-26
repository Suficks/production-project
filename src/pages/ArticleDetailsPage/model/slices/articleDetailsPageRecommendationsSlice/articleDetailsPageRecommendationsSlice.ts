import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
  fetchArticlesRecommendations,
} from '../../services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import {
  ArticleDetailsPageRecommendationsSchema,
} from '../../types/ArticleDetailsPageRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

export const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',

  initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articleDetailsPageRecommendationsReducer,
} = articleDetailsPageRecommendationsSlice;
