export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";
export const COMMENT_CHANGE_NEXT_ID = "COMMENT_CHANGE_NEXT_ID";

export const fetchComments = (postId) => ({ type: FETCH_COMMENTS, postId });
export const fetchCommentsSuccess = (data, postId) => ({ type: FETCH_COMMENTS_SUCCESS, data });
export const fetchCommentsError = (error) => ({ type: FETCH_COMMENTS_ERROR, error });
export const commentChangeNextId = nextId => ({type: COMMENT_CHANGE_NEXT_ID, nextId});

export const ADD_NEW_COMMENT = "ADD_NEW_COMMENT";
export const ADD_NEW_COMMENT_SUCCESS = "FETCH_NEW_COMMENT_SUCCESS";
export const ADD_NEW_COMMENT_ERROR = "FETCH_NEW_COMMENT_ERROR";
export const ADD_NEW_COMMENT_ASYNC = "ADD_NEW_COMMENT_ASYNC";

export const addNewComment = (data, postId) => ({ type: ADD_NEW_COMMENT, data, postId});
export const addNewCommentSuccess = () => ({ type: ADD_NEW_COMMENT_SUCCESS });
export const addNewCommentError = (error) => ({ type: ADD_NEW_COMMENT_ERROR, error });
export const addNewCommentAsync = (data, postId) => {
    return (dispatch, getState) =>{
        dispatch(addNewComment(data, postId));
        setTimeout(
            ()=>{
                dispatch(fetchComments(postId));
            },
            0
        );
    }
}