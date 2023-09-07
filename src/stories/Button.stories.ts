import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Feedback/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    occ_type: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    occ_type: 'filled',
    children: 'button',
    size: 'full',
    type:'button'
  },
};

export const Secondary: Story = {
  args: {
    occ_type: 'outlined',
    children: 'button',
    size: 'full',
    type:'button'
  }
};

export const Large: Story = {
  args: {
    occ_type: 'text',
    children: 'button',
    size: 'full',
    type:'button'
  },
};

export const Small: Story = {
  args: {
    occ_type: 'text',
    children: 'button',
    size: 'full',
    type:'button',
    align:'end'
  },
};
