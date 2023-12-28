import { lazy } from 'react';

export const MainPageAsync = lazy(async () => {
  const importFile = await import('./MainPage');
  return importFile;
});
