import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import {
  articleDetailsCommentsReducer,
} from './articleDetailsCommentSlice/articleDetailsCommentSlice';
import {
  articleDetailsPageRecommendationsReducer,
} from './articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsPageRecommendationsReducer,
});
