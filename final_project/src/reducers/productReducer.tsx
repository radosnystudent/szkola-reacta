import { StateType } from "typesafe-actions";
import { Reducer } from "redux";

export type Actions =
    | { type: "FETCH_PRODUCTS_REQUEST" }
    | { type: "FETCH_PRODUCTS_SUCCESS"; payload: [] }
    | { type: "FETCH_PRODUCTS_FAILURE"; payload: string };

interface productsInitialState {
    loading: boolean;
    products: any;
    error: string;
}

type State = productsInitialState;

const initialState: productsInitialState = {
    loading: false,
    products: [],
    error: "",
};

const productReducer: Reducer = (
    state: State = initialState,
    action: Actions
): State => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        case "FETCH_PRODUCTS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
    }
};

export type ProductReducer = StateType<typeof productReducer>;

export default productReducer;
