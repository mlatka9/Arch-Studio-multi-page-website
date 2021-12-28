import React from 'react';
import Button from './Button';

export default {
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'Button',
};

export const WithArrow = Template.bind({});
WithArrow.args = {
  label: 'Button',
  hasArrow: true,
};

export const WithNumber = Template.bind({});
WithNumber.args = {
  label: '01',
};
