import { Link } from "react-router-dom";

import "./styles/Button.scss";

export default function Button() {
    return (
        <div>
            <Link className="mylink" to="/users">
                Users
            </Link>
        </div>
    );
}
