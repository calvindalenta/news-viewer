import FormSubHeader from './FormSubHeader';

const meta = {
    title: 'Forms/FormSubHeader',
    component: FormSubHeader,
}

export default meta

const Template = (args) => <FormSubHeader {...args} />;

export const Register = Template.bind({});
Register.args = {
    children: "Before you can use our services, please create a new account"
}

export const Login = Template.bind({});
Login.args = {
    children: "Please login to use our services"
}