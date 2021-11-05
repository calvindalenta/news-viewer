import style from "./FormHeader.module.scss";

export default function FormHeader({ children, ...props }) {
    return (
        <h2 {...props} className={style['form-header']}>
            {children}
        </h2>
    );
}