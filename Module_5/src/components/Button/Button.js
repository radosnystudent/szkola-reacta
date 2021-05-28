import "./styles/Button.css";

function Button({ onclick, label, classname, type }) {
    return (
        <button
            className={classname ? classname : "my-button"}
            onClick={onclick}
            type={type ? type : "button"}
        >
            {label}
        </button>
    );
}

export default Button;
