import React from 'react';
import AboutSectionMenu from './../../Components/Partials/AboutSectionMenu';

export default {
  title: 'Components/Partials/AboutSectionMenu',
  component: AboutSectionMenu,
};

const Template = (args) => <AboutSectionMenu {...args} />;

export const Base = Template.bind({});
Base.storyName = 'I am the nav menu of About section';
Base.args = {
};
