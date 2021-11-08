import PropTypes from "prop-types";

import style from "./FormItemRow.module.scss";

export default function FormItemRow({ children, error }){
    return (
        <div className={style.container}>
            <div className={style["form-item-row"]}>
                {children}
            </div>
            {error && <p className={style.error}>{error}</p>}
        </div>
    );
}

FormItemRow.propTypes = {
    /** Error message to be shown*/
    error: PropTypes.string,

    /** Children to be rendered. Usually a form label and form input */
    children: PropTypes.element
}

FormItemRow.defaultProps = {
    error: null,
    children: null
}

