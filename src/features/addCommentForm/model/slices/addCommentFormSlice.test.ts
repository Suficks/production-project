import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';
import { AddCommentFormSchema } from '../types/AddCommentForm';

describe('addCommentFormSlice.test', () => {
  test('test set text', () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: '123',
    };
    expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('123123'))).toEqual({ text: '123123' });
  });
});
