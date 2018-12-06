import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "../actions/postAction"
import { FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_ERROR, CHANGE_NEXT_ID } from "../actions/postAction"

export const postReducer = (state = { data: {} }, action) => {
  switch(action.type) {
    case FETCH_POST:
      return { nextId: -1, data: {}, isloading: true };
    case FETCH_POST_SUCCESS:
      return { nextId: -1, data: action.data, isloading: true };
    case FETCH_POST_ERROR:
      return { nextId: -1, data: {}, error: action.error, isloading: false };
    case CHANGE_NEXT_ID:
      return { nextId: action.nextId, data: {}, error: action.error, isloading: false }
    default:
      return state;
  }
}

export const postsReducer = (state = { data: {} }, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return { data: {}, isloading: true };
    case FETCH_POSTS_SUCCESS:
      return { data: action.data, isloading: true };
    case FETCH_POSTS_ERROR:
      return { data: {}, error: action.error, isloading: false };
    default:
      return state;
  }
}