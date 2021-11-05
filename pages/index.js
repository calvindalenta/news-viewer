import Header from "../components/header/header";

export default function Home(props){
    return (
        <Header nav={{to: "/login", text: "Login"}}/>
    );
}