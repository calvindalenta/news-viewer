import Head from "next/head";

import Header from "../../components/header/Header";
import Container from "../../components/container/Container";
import Article from "../../components/article/Article";
import NotFound from "../../components/404/NotFound";

import { getArticleByTimestamp } from "../../lib/articles";
import Footer from "../../components/footer/Footer";

export default function ArticlePage({ error, article }){
    return (
        <>
            <Head>
                <title>News Viewer - Article</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                {error
                ? <NotFound />
                : <Article article={article} />
                }
            </Container>
            <Footer />
        </>
    );
}


export async function getServerSideProps({ query }) {
    const { articleId } = query

    const result = {
        error: null,
        article: null,
    }

    const article = getArticleByTimestamp(articleId)

    if (article) {
        result.article = article
    } else {
        result.error = "Not found"
    }

    return {
        props: result
    }
}