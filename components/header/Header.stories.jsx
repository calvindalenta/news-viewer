import Header from './Header';

const meta = {
    title: 'Header',
    component: Header,
}

export default meta

const Template = (args) => <Header {...args} />;

export const Login = Template.bind({});
Login.args = {
    nav: {to: "/login", text: "Login"}
};

export const Register = Template.bind({});
Register.args = {
    nav: { to: "/register", text: "Register" }
};
