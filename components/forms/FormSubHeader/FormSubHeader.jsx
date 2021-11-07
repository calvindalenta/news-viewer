import style from "./FormSubHeader.module.scss";

export default function FormSubHeader({ children, ...props }) {
    return (
        <p {...props} className={style['form-sub-header']}>
            {children}
        </p>
    );
}