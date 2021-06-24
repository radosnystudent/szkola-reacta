import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MessageItem from "../components/MessageItem";

import { MessageReducer } from "../reducers/messageReducer";
import { RootState } from "../store";
import { hideMessage } from "../actions/messageActions";

interface MessageI {
    type: string;
    text: string;
}

const Message: React.FC = () => {
    const { messages } = useSelector<RootState, MessageReducer>(
        (state) => state.message
    );

    const dispatch = useDispatch();

    return (
        <div className="messages-container">
            {messages &&
                messages.map((message: MessageI, idx: number) => {
                    return (
                        <MessageItem
                            text={message.text}
                            type={message.type}
                            onClose={() => dispatch(hideMessage(idx))}
                            key={`${message.type}_${idx}`}
                        />
                    );
                })}
        </div>
    );
};

export default Message;
