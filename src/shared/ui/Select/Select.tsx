import { ChangeEvent, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { HStack } from '../Stack';

export interface SelectOptions<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string
  options?: SelectOptions<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(() => (options?.map((opt) => (
    <option
      className={cls.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  ))
  ), [options]);

  const mods: Mods = {};

  return (
    <HStack gap="8" className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
        <span className={cls.label}>{`${label}>`}</span>
      )}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </HStack>
  );
};
