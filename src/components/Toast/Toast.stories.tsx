import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';
import './Toast.css';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  tags: ['autodocs'],
  component: Toast,
  argTypes: {
    type: {
      description: 'Type of the toast message',
      defaultValue: 'info',
      control: {
        type: 'select',
      },
      options: ['info', 'success', 'warning', 'error'],
    },
    closable: {
      description: 'Whether the toast can be manually closed',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    duration: {
      description: 'Duration in milliseconds before auto-dismissal',
      control: {
        type: 'number',
      },
    },
    message: {
      description: 'Toast message content',
      control: {
        type: 'text',
      },
    },
    onClose: {
      action: 'closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    message: "Hello1",
    type: 'info',
    duration: 2000,
    closable: true,
  },
};

export const Success: Story = {
  args: {
    message: 'Saved successfully',
    type: 'success',
    duration: 10000,
  },
};

export const Manual: Story = {
  args: {
    message: 'Close me, please <3',
    type: 'warning',
    closable: true,
  },
};
