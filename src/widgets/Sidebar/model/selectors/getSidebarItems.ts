import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-link.svg';
import MainIcon from 'shared/assets/icons/main-link.svg';
import ProfileIcon from 'shared/assets/icons/profile-link.svg';
import ArticleIcon from 'shared/assets/icons/article-link.svg';
import { SidebarItemsType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const SidebarItemsList: SidebarItemsType[] = [
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
    ];

    if (userData) {
      SidebarItemsList.push(
        {
          path: `${RoutePath.profile}${userData.id}`,
          text: 'Профиль',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: 'Статьи',
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }

    return SidebarItemsList;
  },
);
