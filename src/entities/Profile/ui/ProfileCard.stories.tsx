import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  data: {
    first: 'Sofia',
    lastname: 'Vdovichenko',
    age: 102,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Saint-Petersburg',
    username: 'admin',
    avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/4120518/pub_60d736e753b1df70c252e972_60d737139051453050c622b7/scale_1200',
  },
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    first: 'Sofia',
    lastname: 'Vdovichenko',
    age: 102,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Saint-Petersburg',
    username: 'admin',
    avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/4120518/pub_60d736e753b1df70c252e972_60d737139051453050c622b7/scale_1200',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const withError = Template.bind({});
withError.args = {
  error: 'error',
};

export const isLoading = Template.bind({});
isLoading.args = {
  isLoading: true,
};
