/* eslint-disable max-len */
import { ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        view={ArticleView.BIG}
        articles={[]}
      />
    </div>
  );
};
export default memo(ArticlesPage);
