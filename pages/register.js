import Header from "../components/header/header";
import Container from "../components/container/Container";
import RegisterForm from "../components/RegisterForm";

export default function Login(props){
    return (
        <>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                <RegisterForm />
            </Container>
        </>
    );
}