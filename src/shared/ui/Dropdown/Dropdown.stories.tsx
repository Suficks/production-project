import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../Button/Button';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(Story) => <div style={{ padding: 100 }}><Story /></div>],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>Click</Button>,
  items: [{
    content: 'first',
  },
  {
    content: 'second',
  },
  {
    content: 'third',
  }],
};

export const TopRight = Template.bind({});
TopRight.args = {
  trigger: <Button>Click</Button>,
  direction: 'top right',
  items: [{
    content: '123123123',
  },
  {
    content: '123123123',
  }],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  trigger: <Button>Click</Button>,
  direction: 'bottom right',
  items: [{
    content: '123123123',
  },
  {
    content: '123123123',
  }],
};
