import style from "./Container.module.scss";

export default function Container({ children, ...props }){
    return (
        <main className={style.container}>
            {children}
        </main>
    );
}