import { combineReducers } from "redux";
import { cacheReducer } from "./cacheReducer";
import { postReducer, postsReducer } from "./postReducer";
import { commentsReducer} from "./commentReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  cache: cacheReducer,
  post: postReducer,
  posts: postsReducer,
  user: userReducer,
  comments: commentsReducer
});