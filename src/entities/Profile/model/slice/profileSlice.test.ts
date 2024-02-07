import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileReducer, profileActions } from './profileSlice';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  first: 'Sofia',
  lastname: 'Vdovichenko',
  age: 102,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  username: 'admin',
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    ))
      .toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    ))
      .toEqual({
        readonly: true,
        data,
        form: data,
        validateErrors: undefined,
      });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: '123456' }),
    ))
      .toEqual({
        form: { username: '123456' },
      });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
      isLoading: false,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    ))
      .toEqual({
        validateErrors: undefined,
        isLoading: true,
      });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    ))
      .toEqual({
        isLoading: false,
        data,
        form: data,
        readonly: true,
        validateErrors: undefined,
      });
  });
});
