import { Story, Meta } from '@storybook/react';
import { Mylib, MylibProps } from './mylib';

export default {
  component: Mylib,
  title: 'Mylib',
} as Meta;

const Template: Story<MylibProps> = (args) => <Mylib {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
