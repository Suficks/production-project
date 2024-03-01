import { ReactNode, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { HStack } from '../Stack';

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs = memo(({
  className, tabs, value, onTabClick,
}: TabsProps) => {
  const clickHandle = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <HStack gap="8" className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
});
