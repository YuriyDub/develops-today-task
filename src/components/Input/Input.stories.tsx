import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input/InputField',
  tags: ['autodocs'],
  component: Input,
  argTypes: {
    type: {
      description: 'Input type',
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
      defaultValue: 'text',
    },
    clearable: {
      description: 'Show clear button when value present',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    placeholder: 'Enter text',
    type: "number",
    clearable: true,
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
    clearable: false,
  },
};

export const Number: Story = {
  args: {
    placeholder: 'Enter number',
    type: 'number',
  },
};
