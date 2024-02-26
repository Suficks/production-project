import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

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

  const renderArticle = useCallback((article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      target={target}
    />
  ), [target, view]);

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
