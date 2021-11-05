import Header from "../../components/header/header";
import Container from "../../components/container/Container";
import CardsList from "../../components/cards/CardsList/CardsList";

import getArticles from "../../lib/articles";

export default function ArticlesList({ result }){
    return (
        <>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                <CardsList articles={result.articles} />
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            result: JSON.parse(getArticles())
        }
    }
}