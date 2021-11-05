import style from "./Button.module.scss";

export default function Button({ text, primary = false, ...props }) {
    return (
        <button 
            {...props} 
            className={`${style.button} ${primary ? style["button--primary"] : style["button--secondary"]}`}
        >
            {text ? text : "Button"}
        </button>
    );
}