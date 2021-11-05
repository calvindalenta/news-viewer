import style from "./FormItemRow.module.scss";

export default function FormItemRow({ children }){
    return (
        <div className={style["form-item-row"]}>
            {children}
        </div>
    );
}