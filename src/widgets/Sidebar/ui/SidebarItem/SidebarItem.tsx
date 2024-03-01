import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { SidebarItemsType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  collapsed: boolean
  item: SidebarItemsType
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && item.authOnly) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      to={item.path}
    >
      <HStack gap="16">
        <item.Icon className={cls.icon} />
        <span className={cls.link}>
          {t(item.text)}
        </span>
      </HStack>
    </AppLink>
  );
});
