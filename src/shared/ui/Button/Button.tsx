import { memo, type ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: string | ReactNode
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme,
    children,
    square,
    size = ButtonSize.M,
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={
        classNames(
          cls.Button,
          { [cls.square]: square, [cls.disabled]: disabled },
          [className, cls[theme], cls[size]],
        )
      }
      {...otherProps}
    >
      {children}
    </button>
  );
});
