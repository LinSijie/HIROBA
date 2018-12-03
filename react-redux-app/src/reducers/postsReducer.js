import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "../actions"

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