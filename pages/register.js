import Head from "next/head";

import Header from "../components/header/Header";
import Container from "../components/container/Container";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/footer/Footer";

export default function Register(props){
    return (
        <>
            <Head>
                <title>News Viewer - Register</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                <RegisterForm />
            </Container>
            <Footer />
        </>
    );
}