import { createRef } from "react";

import Button from "../../components/Button/Button";
import Dialog from "../../components/Dialog/Dialog";

import "./styles/Dialogbox.css";

function confirm() {
    console.log(":D");
}

function abort() {
    console.log(":C");
}

export default function DialogboxPage() {
    const dialogRef = createRef();

    const showDialog = () => {
        dialogRef.current.style.display = "block";
    };

    return (
        <>
            <div className="dialogbox-button-container">
                <Button label="Dialogbox" onclick={showDialog} />
            </div>
            <div>
                <Dialog confirm={confirm} abort={abort} ref={dialogRef} />
            </div>
        </>
    );
}
