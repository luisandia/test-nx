import { Story, Meta } from '@storybook/react';
import { Courseitem, CourseitemProps } from './courseitem';

export default {
  component: Courseitem,
  title: 'Courseitem',
} as Meta;

const Template: Story<CourseitemProps> = (args) => <Courseitem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
