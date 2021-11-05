import Header from "../../components/header/header";
import Container from "../../components/container/Container";
import CardsList from "../../components/cards/CardsList/CardsList";

import getArticles from "../../lib/articles";
import Footer from "../../components/footer/Footer";

export default function ArticlesList({ result }){
    return (
        <>
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