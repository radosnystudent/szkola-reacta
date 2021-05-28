import { NavLink } from "react-router-dom";

import "./styles/NavlinkComponent.css";

export default function NavlinkComponent({ to, onclick, label }) {
    return (
        <li>
            <NavLink
                exact={label === "Home" ? true : false}
                to={to}
                className="nav-link"
                activeClassName="selected"
                onClick={onclick}
            >
                {label}
            </NavLink>
        </li>
    );
}
