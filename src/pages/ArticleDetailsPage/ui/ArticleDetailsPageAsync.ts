import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => {
  const importFile = await import('./ArticleDetailsPage');
  return importFile;
});
