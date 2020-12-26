import React from 'react';
import About from './../../Components/Pages/About';
import AboutSectionMenu from './../../Components/Partials/AboutSectionMenu';

export default {
  title: 'Components/Pages/About',
  component: About,
  subcomponents: { AboutSectionMenu },
};

const Template = (args) => <About {...args} />;

export const Base = Template.bind({});
Base.storyName = 'I am the About page';
Base.args = {
};
