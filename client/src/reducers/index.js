import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import scribReducer from "./scribReducer";

export default combineReducers({
  user: userReducer,
  errors: errorReducer,
  scribs: scribReducer
});
