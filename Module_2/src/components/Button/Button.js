import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

import "./styles/Button.css";

function Button({ label }) {
    return (
        <button className="my-button">
            <FontAwesomeIcon icon={faArrowCircleDown} />
            {label}
        </button>
    );
}

export default Button;
