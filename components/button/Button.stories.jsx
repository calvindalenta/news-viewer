import React from 'react';

import Button from './Button';

const meta = {
    title: 'Button',
    component: Button,
}

export default meta

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    text: 'Secondary',
};
