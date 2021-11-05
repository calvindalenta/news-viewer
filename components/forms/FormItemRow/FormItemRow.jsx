import style from "./FormItemRow.module.scss";

export default function FormItemRow({ children, error }){
    return (
        <div className={style.container}>
            <div className={style["form-item-row"]}>
                {children}
            </div>
            {error && <p className={style.error}>{error}</p>}
        </div>
    );
}