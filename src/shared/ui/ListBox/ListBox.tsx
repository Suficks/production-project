import { Listbox as HListbox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

export interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string
  defaultValue?: string
  onChange?: <T extends string>(value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

const MapDirectionClasses: Record<DropdownDirection, string> = {
  'top left': cls.optionTopLeft,
  'top right': cls.optionTopRight,
  'bottom left': cls.optionBottomLeft,
  'bottom right': cls.optionBottomRight,
};

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    readonly,
    direction = 'bottom right',
    label,
    onChange,
  } = props;

  const optionsClasses = [MapDirectionClasses[direction]];

  return (
    <HStack gap="8">
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <HListbox
        as="div"
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button className={cls.trigger} aria-disabled={readonly}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListbox.Button>
        <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListbox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={
                    classNames(cls.item, {
                      [cls.active]: active,
                      [cls.selected]: selected,
                      [cls.disabled]: item.disabled,
                    }, [])
                  }
                >
                  {item.content}
                </li>
              )}
            </HListbox.Option>
          ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
}
