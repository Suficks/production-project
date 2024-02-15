import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleView } from 'entities/Article/model/types/article';
import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: ListIcon,
  },
  {
    view: ArticleView.BIG,
    icon: TiledIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { t } = useTranslation();
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType, index) => (
        <Button
          key={index}
          onClick={onClick(viewType.view)}
          theme={ButtonTheme.CLEAR}
        >
          <Icon
            className={classNames('', { [cls.notSelected]: viewType.view !== view })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
});
