import { FC, lazy } from 'react';
import { ArticleDetailsPageProps } from './ArticleDetailsPage';

export const ArticleDetailsPageAsync = lazy<FC<ArticleDetailsPageProps>>(
  () => import('./ArticleDetailsPage'),
);
