import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { SidebarItemsType } from '../../model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  collapsed: boolean
  item?: SidebarItemsType
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
