import { FC, lazy } from 'react';
import { ProfilePageProps } from './ProfilePage';

export const ProfilePageAsync = lazy<FC<ProfilePageProps>>(() => import('./ProfilePage'));
