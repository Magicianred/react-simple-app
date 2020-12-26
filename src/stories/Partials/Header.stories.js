import React from 'react';
import Header from './../../Components/Partials/Header';

export default {
  title: 'Components/Partials/Header',
  component: Header,
  // decorators:  [(Header) => <div style={{ border: 'solid thin black' }}><Header/></div>]
};

const Template = (args) => <Header {...args} />;

export const WithoutTitle = Template.bind({});
WithoutTitle.storyName = 'I am base Header';
WithoutTitle.args = {
};

export const WithTitle = Template.bind({});
WithTitle.storyName = 'I am Header with title';
WithTitle.args = {
  title: 'Page title'
};
