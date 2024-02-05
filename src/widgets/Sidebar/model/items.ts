import React from 'react';
import AboutIcon from 'shared/assets/icons/about-link.svg';
import MainIcon from 'shared/assets/icons/main-link.svg';
import ProfileIcon from 'shared/assets/icons/profile-link.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemsType {
  text: string
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemsType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'О нас',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
  },
];
