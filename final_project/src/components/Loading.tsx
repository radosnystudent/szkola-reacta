import React from "react";
import { Spinner } from "react-bootstrap";

const Loading: React.FC = () => {
    return (
        <Spinner
            animation="border"
            role="status"
            style={{
                width: "300px",
                height: "300px",
                margin: "auto",
                display: "block",
            }}
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
    );
};

export default Loading;
