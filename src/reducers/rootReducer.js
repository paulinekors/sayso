import { combineReducers } from "redux";
import messagesReducer from "./messagesReducers";
import messageReducer from "./messageReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  messages: messagesReducer,
  message: messageReducer,
  comments: commentsReducer
})