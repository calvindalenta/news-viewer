import { string, shape } from "prop-types";
import Image from "next/image";
import Link from "next/link";

import style from "./Header.module.scss";

Header.propTypes = {
    nav: shape({
        to: string,
        text: string
    })
}

export default function Header({ nav }) {
    return (
        <header className={style.header}>
            <a href="/">
                <div className={style.header__logo}>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <h2>News Viewer</h2>
                </div>
            </a>
            <nav className={style.header__nav}>
                <ul>
                    <li><Link href={nav.to}>{nav.text}</Link></li>
                </ul>
            </nav>
        </header>
    );
}