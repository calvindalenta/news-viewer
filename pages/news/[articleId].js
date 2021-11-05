import Header from "../../components/header/header";
import Container from "../../components/container/Container";
import Article from "../../components/article/Article";

import { getArticleByTimestamp } from "../../lib/articles";

export default function ArticlePage({ error, article }){
    return (
        <>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                {error
                ? <p>{error}</p>
                : <Article article={article} />
                }
            </Container>
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