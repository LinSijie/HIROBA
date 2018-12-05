import { FETCH_COMMENTS, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR } from "../actions"

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