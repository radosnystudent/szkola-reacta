import { Actions } from "../reducers/messageReducer";
import { Dispatch } from "redux";

export const addMessage =
    (type: string, text: string) => (dispatch: Dispatch) => {
        dispatch({
            type: "MESSAGE_ADD",
            payload: { type, text },
        });
        setTimeout(() => {
            dispatch({
                type: "MESSAGE_SHIFT",
            });
        }, 2000);
    };

export const hideMessage = (index: number) => (dispatch: Dispatch) => {
    dispatch({
        type: "MESSAGE_HIDE",
        payload: { index },
    });
};
