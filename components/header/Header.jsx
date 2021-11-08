import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

import style from "./Header.module.scss";

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

Header.propTypes = {
    /** Nav object with "to" (destination) and "text" (display text) inside it */
    nav: PropTypes.shape({
        to: PropTypes.string,
        text: PropTypes.string
    })
};

Header.defaultProps = {
    nav: {
        to: "/",
        text: "Home"
    }
}