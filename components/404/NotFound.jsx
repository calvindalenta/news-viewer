import Link from "next/link";

import style from "./NotFound.module.scss";

export default function NotFound(props){
    return (
        <section className={style.container}>
            <h2>Oops...</h2>
            <h2>Seems like nothing is here</h2>
            <Link href="/news">Go back to the main page &#8594;</Link>
        </section>
    );
}