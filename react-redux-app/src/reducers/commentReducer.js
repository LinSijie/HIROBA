import { FETCH_COMMENTS, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR } from "../actions/commentAction"
import { FETCH_NEW_COMMENT, FETCH_NEW_COMMENT_SUCCESS, FETCH_NEW_COMMENT_ERROR } from "../actions/commentAction"

export const commentsReducer = (state = { data: {} }, action) => {
  switch(action.type) {
    case FETCH_COMMENTS:
      return { data: {}, isloading: true };
    case FETCH_COMMENTS_SUCCESS:
      return { data: action.data, isloading: true };
    case FETCH_COMMENTS_ERROR:
      return { data: {}, error: action.error, isloading: false };
    default:
      return state;
  }
}

export const newCommentReducer = (state = { data: {} }, action) => {
  switch(action.type) {
    case FETCH_NEW_COMMENT:
      return { data: {}, isloading: true };
    case FETCH_NEW_COMMENT_SUCCESS:
      return { data: {}, isloading: true };
    case FETCH_NEW_COMMENT_ERROR:
      return { data: {}, error: action.error, isloading: false };
    default:
      return state;
  }
}