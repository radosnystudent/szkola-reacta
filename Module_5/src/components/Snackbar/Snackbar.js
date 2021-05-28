import React, { useEffect, useState } from "react";

import "./styles/Snackbar.css";

function Snackbar({ duration }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, duration);
    }, [duration]);

    return (
        <>
            {visible ? (
                <div className="snackbar">Hello! I'm snackbar UwU</div>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default Snackbar;
