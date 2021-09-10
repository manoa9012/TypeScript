import { combineReducers } from "redux";
import userReducer from "./userReducers";

const rootReducers = combineReducers({
  data: userReducer,
});

export default rootReducers;
