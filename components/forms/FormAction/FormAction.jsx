import style from "./FormAction.module.scss";

export default function FormAction({ children, ...props }) {
    return (
        <div {...props} className={style['form-action']}>
            {children}
        </div>
    );
}