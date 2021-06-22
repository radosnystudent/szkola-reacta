import React from "react";

interface Props {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    variant: string;
}

const Button: React.FC<Props> = ({label, onClick, variant}) => {

    return (
        <button className={`mybtn mybtn-${variant}`} onClick={onClick}>{label}</button>
    );
}

export default Button;
