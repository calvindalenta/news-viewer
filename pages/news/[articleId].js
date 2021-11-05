import { useRouter } from "next/dist/client/router";

import Header from "../../components/header/header";
import Container from "../../components/container/Container";

export default function Article(props){
    const router = useRouter()
    const { articleId } = router.query
    return (
        <>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                <p>{articleId}</p>
            </Container>
        </>
    );
}