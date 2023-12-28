import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => {
  const importFile = await import('./AboutPage');
  return importFile;
});
