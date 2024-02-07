import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'Sofia',
      lastname: 'Vdovichenko',
      age: 102,
      currency: Currency.USD,
      country: Country.Russia,
      city: 'Saint-Petersburg',
      username: 'admin',
      avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/4120518/pub_60d736e753b1df70c252e972_60d737139051453050c622b7/scale_1200',
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'Sofia',
      lastname: 'Vdovichenko',
      age: 102,
      currency: Currency.USD,
      country: Country.Russia,
      city: 'Saint-Petersburg',
      username: 'admin',
      avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/4120518/pub_60d736e753b1df70c252e972_60d737139051453050c622b7/scale_1200',
    },
  },
})];
