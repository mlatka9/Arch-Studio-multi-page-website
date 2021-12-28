import React from 'react';
import CarouselButton from './CarouselButton';

export default {
  component: CarouselButton,
};

const Template = (args) => <CarouselButton {...args} />;

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
