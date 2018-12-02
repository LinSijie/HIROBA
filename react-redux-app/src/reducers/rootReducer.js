import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";
import { commentReducer } from "./commentReducer";

export default combineReducers({
  users: userReducer,
  posts: postReducer,
  comments: commentReducer
});