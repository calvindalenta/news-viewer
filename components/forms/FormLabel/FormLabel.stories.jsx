import FormLabel from './FormLabel';

const meta = {
    title: 'Forms/FormLabel',
    component: FormLabel,
}

export default meta

const Template = (args) => <FormLabel {...args} />;

export const Username = Template.bind({});
Username.args = {
    children: "Username"
}

export const Password = Template.bind({});
Password.args = {
    children: "Password"
}

export const Gender = Template.bind({});
Gender.args = {
    children: "Gender"
}