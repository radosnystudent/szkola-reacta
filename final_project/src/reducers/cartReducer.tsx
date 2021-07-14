import { StateType } from "typesafe-actions";
import { Reducer } from "redux";

export type Actions =
    | { type: "ADD_TO_CART_SUCCESS"; payload: { id: string; qty: number } }
    | { type: "ADD_TO_CART_FAILURE"; payload: string }
    | { type: "ADD_TO_CART_RESET" }
    | { type: "REMOVE_FROM_CART_SUCCESS"; payload: string }
    | { type: "REMOVE_FROM_CART_FAILURE"; payload: string };

interface cartInitialState {
    cartProducts: { id: string; qty: number }[];
    error: string;
}

type State = cartInitialState;

const initialState: cartInitialState = {
    cartProducts: [],
    error: "",
};

export const cartReducer: Reducer = (
    state: State = initialState,
    action: Actions
): State => {
    switch (action.type) {
        case "ADD_TO_CART_SUCCESS":
            if (!state.cartProducts) {
                state.cartProducts = [action.payload];
            } else {
                state.cartProducts.push(action.payload);
            }
            const allcartProducts = [...state.cartProducts];
            return {
                ...state,
                cartProducts: allcartProducts,
            };
        case "ADD_TO_CART_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        case "ADD_TO_CART_RESET":
            return initialState;
        case "REMOVE_FROM_CART_SUCCESS":
            state.cartProducts.filter(
                (product) => product.id !== action.payload
            );
            return {
                ...state,
            };
        case "REMOVE_FROM_CART_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export type CartReducer = StateType<typeof cartReducer>;

export default cartReducer;
