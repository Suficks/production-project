import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { HStack } from 'shared/ui/Stack';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <HStack
    align="center"
    justify="center"
    max
    className={classNames(cls.PageLoader, {}, [className])}
  >
    <Loader />
  </HStack>
);
