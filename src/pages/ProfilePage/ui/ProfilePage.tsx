import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>{t('Profile Page')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
