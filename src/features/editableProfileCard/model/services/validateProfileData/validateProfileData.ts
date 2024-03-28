import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }
  const {
    first, lastname, age, country,
  } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  if (!age || age > 140) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  return errors;
};
