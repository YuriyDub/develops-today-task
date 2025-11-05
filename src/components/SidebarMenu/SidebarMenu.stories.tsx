import type { Meta, StoryObj } from '@storybook/react';
import SidebarMenu, { type MenuItem } from './SidebarMenu';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  tags: ['autodocs'],
  component: SidebarMenu,
  argTypes: {
    items: {
      description: 'Array of menu items to render',
      control: { type: 'object' },
    },
    open: {
      description: 'Controls whether the sidebar is open',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    onClose: {
      action: 'closed',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const sample1: MenuItem[] = [
  { id: '1', label: 'Home' },
  { id: '2', label: 'Docs' },
  { id: '3', label: 'About' },
];

const sampleNested: MenuItem[] = [
  { id: '1', label: 'Dashboard' },
  {
    id: '2',
    label: 'Projects',
    children: [
      { id: '2-1', label: 'Active' },
      { id: '2-2', label: 'Archived' },
    ],
  },
  {
    id: '3',
    label: 'Settings',
    children: [
      { id: '3-1', label: 'Profile' },
      { id: '3-2', label: 'Billing', children: [{ id: '3-2-1', label: 'Invoices' }] },
    ],
  },
];

export const OneLevel: Story = {
  args: {
    open: true,
    items: sample1,
    onClose: () => {},
  },
};

export const Nested: Story = {
  args: {
    open: true,
    items: sampleNested,
    onClose: () => {},
  },
};
