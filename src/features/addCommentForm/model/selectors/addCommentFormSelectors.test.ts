import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

describe('getAddCommentFormText.test', () => {
  test('should return text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'Text',
      },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual('Text');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual('');
  });
});

describe('getAddCommentFormError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'error',
      },
    };
    expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
