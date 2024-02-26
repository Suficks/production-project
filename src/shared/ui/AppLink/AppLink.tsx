import { HTMLAttributeAnchorTarget, ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps {
  className?: string
  children?: ReactNode
  to: string
  theme?: AppLinkTheme
  target?: HTMLAttributeAnchorTarget
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
