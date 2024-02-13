import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => {
  const importFile = await import('./AddCommentForm');
  return importFile;
});
