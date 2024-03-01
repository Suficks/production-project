import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <VStack
      max
      justify="center"
      align="center"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t('Страница не найдена')}
    </VStack>
  );
};
