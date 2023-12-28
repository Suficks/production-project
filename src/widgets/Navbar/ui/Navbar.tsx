import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
        >
          {t('О нас')}
        </AppLink>
      </div>
    </div>
  );
};
