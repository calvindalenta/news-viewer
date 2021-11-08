import FormHeader from './FormHeader';

const meta = {
    title: 'Forms/FormHeader',
    component: FormHeader,
}

export default meta

const Template = (args) => <FormHeader {...args} />;

export const Register = Template.bind({});
Register.args = {
    children: "Create New Account"
}

export const Login = Template.bind({});
Login.args = {
    children: "Login Account"
}