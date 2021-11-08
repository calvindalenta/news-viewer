import NotFound from './NotFound';

const meta = {
    title: 'NotFound',
    component: NotFound,
}

export default meta

const Template = (args) => <NotFound {...args} />;

export const Default = Template.bind({});
