import style from "./Form.module.scss";

export default function Form({ children, ...props }) {
    return (
        <form {...props} className={style['form']}>
            {children}
        </form>
    );
}