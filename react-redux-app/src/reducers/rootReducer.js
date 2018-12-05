import { combineReducers } from "redux";
import { cacheReducer } from "./cacheReducer";
import { postReducer } from "./postReducer";
import { postsReducer } from "./postsReducer";
import { commentsReducer} from "./commentsReducer";

export default combineReducers({
  cache: cacheReducer,
  post: postReducer,
  posts: postsReducer,
  comments: commentsReducer
});