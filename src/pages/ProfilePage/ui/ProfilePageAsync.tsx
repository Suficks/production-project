import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => {
  const importFile = await import('./ProfilePage');
  return importFile;
});
