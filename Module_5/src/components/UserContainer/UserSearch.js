import React from "react";

import Button from "../Button/Button";
import "./styles/UserSearch.css";

function UserSearch({ handleKey, handleReset }, ref) {
    const submit = (e) => e.preventDefault();

    return (
        <div className="search-wrapper">
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Szukaj użytkownika..."
                    name="search"
                    onKeyDown={handleKey}
                    ref={ref}
                    className="search-input"
                />
                <span style={{ padding: "10px" }}>
                    <Button label="Reset" onclick={handleReset} type="reset" />
                </span>
            </form>
        </div>
    );
}

export default React.forwardRef(UserSearch);
