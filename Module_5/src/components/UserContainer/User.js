import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./styles/User.css";

export default function User({ user, handleReset }) {
    return (
        <div className="user-container">
            <h2>Wybrany użytkownik</h2>
            <div className="user-content">
                <p>
                    Imię: {user.name} <br />
                    Nazwisko: {user.surname} <br />
                    Wiek: {user.age}{" "}
                </p>
            </div>
            <div className="button-wrapper">
                <NavLink to="/users">
                    <Button label="Powrót" onclick={handleReset} />
                </NavLink>
            </div>
        </div>
    );
}
