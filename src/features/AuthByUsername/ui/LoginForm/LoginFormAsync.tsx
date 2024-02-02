import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => {
  const importFile = await import('./LoginForm');
  return importFile;
});
