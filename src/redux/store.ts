import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk];

/* if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
} */

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = rootReducers;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof rootReducers>;

export default store;
