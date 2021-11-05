import style from "./FormLabel.module.scss";

export default function FormLabel({ children, ...props }) {
    return (
        <label {...props} className={style['form-label']}>
            {children}
        </label>
    );
}