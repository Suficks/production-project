import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(async () => {
  const importFile = await import('./ArticleEditPage');
  return importFile;
});
