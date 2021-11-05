import Head from "next/head";

import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import CardsList from "../../components/cards/CardsList/CardsList";

import getArticles from "../../lib/articles";
import Footer from "../../components/footer/Footer";

export default function ArticlesList({ result }){
    return (
        <>
            <Head>
                <title>News Viewer - Articles</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                <CardsList articles={result.articles} />
            </Container>
            <Footer />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            result: getArticles()
        }
    }
}