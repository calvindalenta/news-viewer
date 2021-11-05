import Head from "next/head";

import Header from "../components/header/Header";
import Container from "../components/container/Container";
import LoginForm from "../components/LoginForm";
import Footer from "../components/footer/Footer";

export default function Login(props){
    return (
        <>
            <Head>
                <title>News Viewer - Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header nav={{to: "/register", text: "Register"}}/>
            <Container>
                <LoginForm />
            </Container>
            <Footer />
        </>
    );
}