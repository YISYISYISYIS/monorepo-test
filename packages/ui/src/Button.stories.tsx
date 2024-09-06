import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
    appName: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appName: 'MyApp',
    children: 'Primary Button',
  },
};

export const WithClassName: Story = {
  args: {
    appName: 'MyApp',
    className: 'btn-primary',
    children: 'Button with Class',
  },
};

export const ClickMe: Story = {
  args: {
    appName: 'MyApp',
    children: 'Click Me!',
  },
};
