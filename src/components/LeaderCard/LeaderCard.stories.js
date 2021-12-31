import React from 'react';
import LeaderCard from './LeaderCard';
import avatarJake from 'assets/images/about-images/desktop/avatar-jake.jpg';
import { BrowserRouter } from 'react-router-dom';

export default {
  component: LeaderCard,
};

const Template = (args) => (
  <BrowserRouter>
    <LeaderCard {...args} />
  </BrowserRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  name: 'Jake Richards',
  position: 'Chief Architect',
  imageUrl: avatarJake,
};
