import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.jpg';
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
    avatar,
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
    avatar,
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
