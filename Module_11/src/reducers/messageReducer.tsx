import { StateType } from "typesafe-actions";
import { Reducer } from "redux";

export type Actions =
    | {
          type: "MESSAGE_ADD";
          payload: { type: string; text: string };
      }
    | { type: "MESSAGE_HIDE"; payload: { index: number } }
    | { type: "MESSAGE_SHIFT" }
    | { type: "MESSAGE_RESET" };

interface messageInitialState {
    messages: { type: string; text: string }[];
}

type State = messageInitialState;

const initialState: messageInitialState = {
    messages: [{ type: "", text: "" }],
};

const messageReducer: Reducer = (
    state: State = initialState,
    action: Actions
): State => {
    switch (action.type) {
        case "MESSAGE_ADD":
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case "MESSAGE_HIDE":
            let msgTempHide = [...state.messages];
            msgTempHide.splice(action.payload.index, 1);
            return {
                ...state,
                messages: msgTempHide,
            };
        case "MESSAGE_SHIFT":
            let msgTempShift = [...state.messages];
            msgTempShift.shift();
            if (msgTempShift) {
                return {
                    ...state,
                    messages: msgTempShift,
                };
            }
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};

export type MessageReducer = StateType<typeof messageReducer>;

export default messageReducer;
