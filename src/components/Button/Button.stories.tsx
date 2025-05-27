import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Plain',
    variant: 'plain',
  },
};

export const Success: Story = {
  args: {
    children: 'Solid',
    variant: 'solid',
  },
};

export const Warning: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};
