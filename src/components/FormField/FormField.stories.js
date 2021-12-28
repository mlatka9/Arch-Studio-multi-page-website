import React from 'react';
import FormField from './FormField';

export default {
  component: FormField,
};

const Template = (args) => <FormField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'Textbox1',
};

export const NormalWithError = Template.bind({});
NormalWithError.args = {
  placeholder: 'Textbox1',
  isError: true,
};

export const TextArea = Template.bind({});
TextArea.args = {
  placeholder: 'Textbox1',
  isTextArea: true,
};

export const TextAreaWithError = Template.bind({});
TextAreaWithError.args = {
  placeholder: 'Textbox1',
  isTextArea: true,
  isError: true,
};
