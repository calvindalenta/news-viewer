import Button from '../../button/Button';
import StyledLink from '../../styled-link/StyledLink';
import FormAction from '../FormAction/FormAction';
import FormHeader from '../FormHeader/FormHeader';
import FormSubHeader from '../FormSubHeader/FormSubHeader';
import FormItemRow from '../FormItemRow/FormItemRow';
import FormLabel from '../FormLabel/FormLabel';
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import Form from './Form';

const meta = {
    title: 'Forms/Form',
    component: Form,
}

export default meta

const Template = (args) => <Form {...args} />;

const children = 
<>
    <FormHeader>Create New Account</FormHeader>
    <FormSubHeader>Before you can use our services, please create a new account</FormSubHeader>
    <FormItemRow>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
            type="text"
            id="email"
            name="email"
            placeholder="johndoe@mail.com"
        />
    </FormItemRow>
    <FormItemRow error="Must be 8 characters or more">
        <FormLabel htmlFor="first-name">First Name</FormLabel>
        <FormInput
            type="text"
            id="first-name"
            name="first-name"
            placeholder="John"
        />
    </FormItemRow>
    <FormItemRow>
        <FormLabel htmlFor="gender">Gender</FormLabel>
        <FormSelect>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </FormSelect>
    </FormItemRow>
    <FormAction>
        <Button text="Reset" type="reset" />
        <Button primary text="Register" type="submit" />
        <FormSubHeader>
            Already have an account? {' '}
            <StyledLink href="/login">Login here</StyledLink>
        </FormSubHeader>
    </FormAction>
</>

export const Default = Template.bind({});
Default.args = {
    children
}