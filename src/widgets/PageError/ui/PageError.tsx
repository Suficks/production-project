import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reload = () => {
    window.location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div className={cls.text}>{t('Произошла непредвиденная ошибка')}</div>
      <Button onClick={reload}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
