import React from 'react';
import Footer from './../../Components/Partials/Footer';

export default {
    title: 'Components/Partials/Footer',
    component: Footer,
}

const Template = (args) => <Footer {...args} />;

export const Base = Template.bind({});
Base.args = {};

Base.storyName = 'I am base Footer'