import Image from "next/image";
import moment from "moment";

import Button from "../../button/Button";

import style from "./Card.module.scss";

export default function Card({ data }){
    const { urlToImage, title, author, sourceName, description, publishedAt } = data
    
    // Find another alternative for generating unique urls
    const newUrl = `/news/${publishedAt}`

    return (
        <article className={style.card}>
            <div className={style["card__media"]}>
                <a href={newUrl}>
                    <img src={urlToImage} alt={title} />
                </a>
            </div>
            <section className={style["card__content"]}>
                <header className={style["card__header"]}>
                    <h3>{title}</h3>
                </header>
                <ul className={style["card__list"]}>
                    <li className={style["card__list-item"]}>
                        &#128346; {moment(publishedAt).format("MMMM D, YYYY")}
                    </li>
                    <li className={style["card__list-item"]}>
                        ጰ {author ? author : sourceName}
                    </li>
                </ul>
                <p className={style["card__description"]}>
                    {description}
                </p>
                <div className="card__action">
                    <a href={newUrl}>
                        <Button primary text="Read More" />
                    </a>
                </div>
            </section>
        </article>
    );
}