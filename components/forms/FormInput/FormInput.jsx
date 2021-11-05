import style from "./FormInput.module.scss";

export default function FormInput(props) {
    return (
        <input {...props} className={style['form-input']}/>
    );
}