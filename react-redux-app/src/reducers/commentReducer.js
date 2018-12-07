import { 
  FETCH_COMMENTS_SUCCESS, 
  FETCH_COMMENTS_ERROR, 
  COMMENT_CHANGE_NEXT_ID,
  ADD_NEW_COMMENT_ERROR
} from "../actions/commentAction"

export const commentsReducer = (state = { data: {} }, action) => {
  switch(action.type) {

    case FETCH_COMMENTS_SUCCESS:
      return { nextId: -1, data: action.data, currId: action.postId, isloading: true };
    case FETCH_COMMENTS_ERROR:
      return { nextId: -1, data: {}, error: action.error, isloading: false };
    // case ADD_NEW_COMMENT_SUCCESS:
    //   return { nextId: -1, data: action.data, currId:currPostId, isloading: true };
    case ADD_NEW_COMMENT_ERROR:
      return { nextId: -1, data: {}, error: action.error, isloading: false };
    case COMMENT_CHANGE_NEXT_ID:
      return { nextId: action.nextId, data: {}, error: action.error, isloading: false };
    default:
      return state;
  }
}