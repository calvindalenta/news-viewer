import StyledLink from './StyledLink';

const meta = {
    title: 'StyledLink',
    component: StyledLink,
}

export default meta

const Template = (args) => <StyledLink {...args} />;

export const Login = Template.bind({});
Login.args = {
    href: "/",
    children: "Login here"
}

export const Register = Template.bind({});
Register.args = {
    href: "/",
    children: "Register here"
}