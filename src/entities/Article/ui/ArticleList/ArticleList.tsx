import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  List,
  ListRowProps,
  WindowScroller,
  WindowScrollerChildProps,
} from 'react-virtualized';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => (
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (<ArticleListItemSkeleton key={index} view={view} />))
);

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    target,
    view = ArticleView.SMALL,
  } = props;

  const { t } = useTranslation('article');

  const isBig = view === ArticleView.BIG;
  const itemsPerRow = isBig ? 1 : 4;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({
    index, isScrolling, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
          className={cls.card}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={cls.row}
      >
        {items}
      </div>

    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        isScrolling,
        onChildScroll,
        scrollTop,
        registerChild,
      }: WindowScrollerChildProps) => (
        <div
          ref={registerChild}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <List
            autoHeight
            height={height ?? 700}
            width={width ? width - 80 : 700}
            isScrolling={isScrolling}
            onScroll={onChildScroll}
            rowCount={rowCount}
            rowHeight={isBig ? 700 : 330}
            rowRenderer={rowRender}
            scrollTop={scrollTop}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
