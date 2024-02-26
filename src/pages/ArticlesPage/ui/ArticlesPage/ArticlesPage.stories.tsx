import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articlesPage: {
    page: 1,
    limit: 4,
    hasMore: false,
    view: ArticleView.SMALL,
    order: 'asc',
    sort: ArticleSortField.TITLE,
    search: '',
    type: ArticleType.ALL,
    _inited: true,
  },
})];
