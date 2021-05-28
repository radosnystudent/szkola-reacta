import { useState } from "react";

import Snackbar from "../../components/Snackbar/Snackbar";
import Button from "../../components/Button/Button";

import "./styles/Snackbar.css";

export default function SnackbarPage() {
    const [snackers, setSnack] = useState(false);
    return (
        <>
            <div className="snackbar-button-container">
                <Button label="Snack me!" onclick={() => setSnack(true)} />
            </div>
            <div>{snackers ? <Snackbar duration="5000" /> : <p></p>}</div>
        </>
    );
}
