import FormInput from '../FormInput/FormInput';
import FormLabel from '../FormLabel/FormLabel';
import FormSelect from '../FormSelect/FormSelect';
import FormItemRow from './FormItemRow';

const meta = {
    title: 'Forms/FormItemRow',
    component: FormItemRow,
}

export default meta

const Template = (args) => <FormItemRow {...args} />;

const email = 
<>
    <FormLabel htmlFor="email">Email</FormLabel>
    <FormInput
        type="text"
        id="email"
        name="email"
        placeholder="johndoe@mail.com"
    />
</>

export const InputEmail = Template.bind({});
InputEmail.args = {
    children: email
}

export const InputEmailWithError = Template.bind({});
InputEmailWithError.args = {
    children: email,
    error: "Must be 8 characters or more"
}

const genders = 
<>
    <FormLabel htmlFor="gender">Gender</FormLabel>
    <FormSelect>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </FormSelect>
</>

export const InputSelect = Template.bind({});
InputSelect.args = {
    children: genders,
}