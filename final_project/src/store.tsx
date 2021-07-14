import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const reducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

const initialStates: {} = {
    products: {},
    cart: [],
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialStates,
    composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
