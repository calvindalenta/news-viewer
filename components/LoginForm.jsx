import Button from "./button/Button";
import Form from "./forms/Form/Form";
import FormAction from "./forms/FormAction/FormAction";
import FormHeader from "./forms/FormHeader/FormHeader";
import FormInput from "./forms/FormInput/FormInput";
import FormItemRow from "./forms/FormItemRow/FormItemRow";
import FormLabel from "./forms/FormLabel/FormLabel";
import FormSubHeader from "./forms/FormSubHeader/FormHeader";

export default function LoginForm(props){
    return (
        <Form>
            <FormHeader>Login Account</FormHeader>
            <FormSubHeader>Please login to use our services</FormSubHeader>
            <FormItemRow>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@yourmail.com"
                />
            </FormItemRow>
            <FormItemRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                />
            </FormItemRow>
            <FormAction>
                <Button text="Reset" type="reset" />
                <Button primary text="Register" type="button" />
            </FormAction>
        </Form>
    );
}