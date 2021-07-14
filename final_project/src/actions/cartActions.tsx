import { Dispatch } from "redux";

import {
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    ADD_TO_CART_RESET,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAILURE,
} from "../constants/actions";

export const addToCart =
    (productId: string, qty: number) => (dispatch: Dispatch) => {
        if (productId && qty > 0) {
            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: { productId, qty },
            });
        } else {
            dispatch({
                type: ADD_TO_CART_FAILURE,
                payload:
                    "Podany produkt nie istnieje lub ilość jest niewystarczająca",
            });
        }
    };

export const removeFromCart = (productId: string) => (dispatch: Dispatch) => {
    if (productId) {
        dispatch({
            type: REMOVE_FROM_CART_SUCCESS,
            payload: [productId],
        });
    } else {
        dispatch({
            type: REMOVE_FROM_CART_FAILURE,
            payload: "Błędny produkt",
        });
    }
};

export const resetCart = () => (dispatch: Dispatch) => {
    dispatch({
        type: ADD_TO_CART_RESET,
    });
};
