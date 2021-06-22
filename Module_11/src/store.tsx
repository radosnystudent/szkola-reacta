import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./reducers/userReducer";

const middleware = [thunk];

const store = createStore(
    usersReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export type RootState = ReturnType<typeof store.getState>;

export default store;

