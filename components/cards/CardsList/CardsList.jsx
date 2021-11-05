import Card from "../Card/Card";

import style from "./CardsList.module.scss";

export default function CardsList({ articles }) {
    return (
        <main className={style.articles}>
            {articles.map(entry => {
                return <Card key={entry.title} data={entry} />
            })}
        </main>
    );
}