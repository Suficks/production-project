import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropDownItems {
  disabled?: boolean
  content: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string;
  items: DropDownItems[];
  trigger?: ReactNode
  direction?: DropdownDirection
}

const MapDirectionClasses: Record<DropdownDirection, string> = {
  'top left': cls.optionTopLeft,
  'top right': cls.optionTopRight,
  'bottom left': cls.optionBottomLeft,
  'bottom right': cls.optionBottomRight,
};

export function Dropdown(props: DropdownProps) {
  const {
    className, items, trigger, direction = 'bottom right',
  } = props;

  const menuClasses = [MapDirectionClasses[direction]];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={
                classNames(cls.item, { [cls.active]: active }, [className])
              }
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                key={String(item.content)}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              key={String(item.content)}
              as={Fragment}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
