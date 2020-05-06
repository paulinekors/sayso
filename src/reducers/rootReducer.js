import { combineReducers } from "redux";
import messagesReducer from "./messagesReducers";
import messageReducer from "./messageReducer";

export default combineReducers({
  messagesReducer, 
  messageReducer
});