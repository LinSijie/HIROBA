import { FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_ERROR, CHANGE_NEXT_ID } from "../actions"

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