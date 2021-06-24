import React from "react";

interface Props {
    type: string;
    text: string;
    onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const MessageItem: React.FC<Props> = ({ type, text, onClose }) => {
    return (
        <div className={`message message-${type}`}>
            <span>{text}</span>
            <span className="close" onClick={onClose}>
                x
            </span>
        </div>
    );
};

export default MessageItem;
