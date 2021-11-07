import Button from '../../button/Button';
import FormSubHeader from '../FormSubHeader/FormSubHeader';
import StyledLink from '../../styled-link/StyledLink';
import FormAction from './FormAction';

const meta = {
    title: 'Forms/FormAction',
    component: FormAction,
}

export default meta

const Template = (args) => <FormAction {...args} />;

const register =
    <>
        <Button text="Reset" type="reset"/>
        <Button primary text="Register" type="submit" />
        <FormSubHeader>
            Already have an account? {' '}
            <StyledLink href="/login">Login here</StyledLink>
        </FormSubHeader>
    </>

export const Register = Template.bind({});
Register.args = {
    children: register
}

const login =
    <>
        <Button text="Reset" type="reset" />
        <Button primary text="Login" type="submit" />
        <FormSubHeader>
            Don&apos;t have an account yet? {' '}
            <StyledLink href="/register">Register here</StyledLink>
        </FormSubHeader>
    </>

export const Login = Template.bind({});
Login.args = {
    children: login
}