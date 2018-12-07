import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR, COMMENT_CHANGE_NEXT_ID } from "../actions/commentAction"
import { ADD_NEW_COMMENT_SUCCESS, ADD_NEW_COMMENT_ERROR } from "../actions/commentAction"

let currPostId;

export const commentsReducer = (state = { data: {} }, action) => {
  switch(action.type) {

    case FETCH_COMMENTS_SUCCESS:
      return { nextId: -1, data: action.data, currId:currPostId, isloading: true };
    case FETCH_COMMENTS_ERROR:
      return { nextId: -1, data: {}, currId:currPostId, error: action.error, isloading: false };
    case ADD_NEW_COMMENT_SUCCESS:
      return { nextId: -1, data: action.data, currId:currPostId, isloading: true };
    case ADD_NEW_COMMENT_ERROR:
      return { nextId: -1, data: {}, currId:currPostId, error: action.error, isloading: false };
    case COMMENT_CHANGE_NEXT_ID:
      currPostId = action.nextId;
      return { nextId: action.nextId, data: {}, currId: currPostId, error: action.error, isloading: false };
    default:
      return state;
  }
}