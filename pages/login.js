import Header from "../components/header/header";
import Container from "../components/container/Container";
import LoginForm from "../components/LoginForm";

export default function Login(props){
    return (
        <>
            <Header nav={{to: "/register", text: "Register"}}/>
            <Container>
                <LoginForm />
            </Container>
        </>
    );
}