export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";

export const fetchComments = (postId) => ({ type: FETCH_COMMENTS, postId });
export const fetchCommentsSuccess = (data) => ({ type: FETCH_COMMENTS_SUCCESS, data });
export const fetchCommentsError = (error) => ({ type: FETCH_COMMENTS_ERROR, error });

export const FETCH_NEW_COMMENT = "FETCH_NEW_COMMENTS";
export const FETCH_NEW_COMMENT_SUCCESS = "FETCH_NEW_COMMENTS_SUCCESS";
export const FETCH_NEW_COMMENT_ERROR = "FETCH_NEW_COMMENTS_ERROR";

export const fetchNewComment = (postId, data) => ({ type: FETCH_NEW_COMMENT, postId, data });
export const fetchNewCommentSuccess = () => ({ type: FETCH_NEW_COMMENT_SUCCESS });
export const fetchNewCommentError = (error) => ({ type: FETCH_NEW_COMMENT_ERROR, error });
