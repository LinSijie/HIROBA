import { combineReducers } from "redux";
import { cacheReducer } from "./cacheReducer";
import { postReducer, postsReducer } from "./postReducer";
import { commentsReducer} from "./commentReducer";

export default combineReducers({
  cache: cacheReducer,
  post: postReducer,
  posts: postsReducer,
  comments: commentsReducer
});