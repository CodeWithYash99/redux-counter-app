import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import countReducer from "../Reducers/countReducer";

const middleware = [thunk];

const store = createStore(
  countReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
