import Head from "next/head";

import Header from "../components/header/Header";
import NotFound from "../components/404/NotFound";
import Footer from "../components/footer/Footer";
import Container from "../components/container/Container";

export default function NotFoundPage() {
    return (
        <>
            <Head>
                <title>News Viewer - Not Found</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                <NotFound />
            </Container>
            <Footer />
        </>
    );
}