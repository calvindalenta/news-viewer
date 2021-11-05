import moment from "moment";
import Button from "../button/Button";

import style from "./Article.module.scss";

export default function Article({ article: { urlToImage, url, title, publishedAt, author, source, content, description} }){
    return (
        <article className={style.article}>
            <div className={style["article__media"]}>
                <img src={urlToImage} alt={title} />
            </div>
            <header className={style["article__header"]}>
                <h2>{title}</h2>
            </header>
            <ul className={style["article__meta"]}>
                <li className={style["article__meta-item"]}>
                    &#128346; {moment(publishedAt).format("MMMM D, YYYY")}
                </li>
                <li className={style["article__meta-item"]}>
                    ጰ {author ? author : source.name}
                </li>
            </ul>
            <div className={style["article__content"]}>
                <p className={style["article__paragraph"]}>
                    {content ? content : description}
                </p>
            </div>
            <div className={style["article__action"]}>
                <a href={url} target="_blank" rel="noreferrer">
                    <Button primary text="Read the full article here" />
                </a>
            </div>
        </article>
    );
}