import React from "react";
import Button from "../Button/Button";
import "./styles/Dialog.css";

function closeDialog(ref) {
    ref.current.style.display = "none";
}

const Dialog = React.forwardRef((props, ref) => (
    <>
        <div ref={ref} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="header-item">Tytuł dialogboxa</h4>
                    <span
                        className="modal-close header-item"
                        onClick={() => closeDialog(ref)}
                    >
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <p className="modal-text">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                        <br />
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                    </p>
                </div>
                <div className="modal-footer">
                    <div className="modal-footer-item">
                        <Button
                            classname="dialogbox-button"
                            label="Abort"
                            onclick={props.abort}
                        />
                    </div>
                    <div className="modal-footer-item">
                        <Button
                            classname="dialogbox-button"
                            label="Confirm"
                            onclick={props.confirm}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
));

export default Dialog;
