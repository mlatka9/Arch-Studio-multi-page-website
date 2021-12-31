import React from 'react';
import SliderButton from './SliderButton';

export default {
  component: SliderButton,
};

const Template = (args) => <SliderButton {...args} />;

export const IsSelected = Template.bind({});
IsSelected.args = {
  label: '01',
  isSelected: true,
};

export const IsNotSelected = Template.bind({});
IsNotSelected.args = {
  label: '02',
  isSelected: false,
};
