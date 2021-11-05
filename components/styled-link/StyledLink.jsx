import Link from "next/link";

import style from "./StyledLink.module.scss";

export default function StyledLink({ children, ...props }){
    return (
        <span className={style.link}>
            <Link {...props} >{children}</Link>
        </span>
    );
}