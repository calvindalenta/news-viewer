import PropTypes from "prop-types";

import style from "./Button.module.scss";

export default function Button({ text, primary, ...props }) {
    return (
        <button 
            {...props} 
            className={`${style.button} ${primary ? style["button--primary"] : style["button--secondary"]}`}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    /** Text that will be displayed inside the button */
    text: PropTypes.string,

    /** Check if it's a primary button */
    primary: PropTypes.bool
}; 

Button.defaultProps = {
    text: "Button",
    primary: false
};