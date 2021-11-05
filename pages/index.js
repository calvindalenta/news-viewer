import Header from "../components/header/header";
import FormItemRow from "../components/forms/FormItemRow/FormItemRow";
import FormInput from "../components/forms/FormInput/FormInput";
import FormLabel from "../components/forms/FormLabel/FormLabel";
import FormSelect from "../components/forms/FormSelect/FormSelect";
import Form from "../components/forms/Form/Form";
import FormAction from "../components/forms/FormAction/FormAction";
import FormHeader from "../components/forms/FormHeader/FormHeader";
import FormSubHeader from "../components/forms/FormSubHeader/FormHeader";
import Button from "../components/button/Button";
import Container from "../components/container/Container";

export default function Home(props){
    return (
        <>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                <Form>
                    <FormHeader>Create New Account</FormHeader>
                    <FormSubHeader>Before you can use our services, please create a new account</FormSubHeader>
                    <FormItemRow>
                        <FormLabel>Username</FormLabel>
                        <FormInput />
                    </FormItemRow>
                    <FormItemRow>
                        <FormLabel>Select</FormLabel>
                        <FormSelect>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </FormSelect>
                    </FormItemRow>
                    <FormAction>
                        <Button text="Reset"  type="reset" />
                        <Button text="Register" primary type="button" />
                    </FormAction>
                </Form>
            </Container>
        </>
    );
}