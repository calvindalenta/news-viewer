import style from "./FormSelect.module.scss";

export default function FormSelect({ children, ...props }) {
    return (
        <select {...props} className={style['form-select']}>
            {children}
        </select>
    );
}