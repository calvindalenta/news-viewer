import Header from "../components/header/header";
import NotFound from "../components/404/NotFound";
import Footer from "../components/footer/Footer";

export default function NotFoundPage() {
    return (
        <>
            <Header nav={{to: "/login", text: "Login"}}/>
            <NotFound />
            <Footer />
        </>
    );
}