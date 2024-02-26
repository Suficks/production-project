import { FC, lazy } from 'react';
import { ArticlesPageProps } from './ArticlesPage';

export const ArticlesPageAsync = lazy<FC<ArticlesPageProps>>(() => import('./ArticlesPage'));
