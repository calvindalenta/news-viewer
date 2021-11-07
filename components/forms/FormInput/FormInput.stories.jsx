import FormInput from './FormInput';

const meta = {
    title: 'Forms/FormInput',
    component: FormInput,
}

export default meta

const Template = (args) => <FormInput {...args} />;

export const Text = Template.bind({});
Text.args = {
    type: "text",
    placeholder: "johndoe@yourmail.com"
}

export const Password = Template.bind({});
Password.args = {
    type: "password",
}