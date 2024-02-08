import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData.test', () => {
  test('should return auth data', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '123',
          username: 'admin',
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: '123',
      username: 'admin',
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
