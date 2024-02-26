import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => {
  const importFile = await import('./ArticlesPage');
  return importFile;
});
