import Header from "../components/header/header";
import NotFound from "../components/404/NotFound";

export default function NotFoundPage() {
    return (
        <>
            <Header nav={{to: "/login", text: "Login"}}/>
            <NotFound />
        </>
    );
}