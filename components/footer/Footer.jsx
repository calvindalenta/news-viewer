
import style from "./Footer.module.scss";

export default function Footer(props) {
    return (
        <footer className={style.footer}>
            <p>Copyright &#169; 2021 News Viewer LLC. All Rights Reserved</p>
        </footer>
    );
}