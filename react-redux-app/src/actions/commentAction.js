import { apiPost } from "../utils/apiMethod";

export const COMMENT_CHANGE_NEXT_ID = "COMMENT_CHANGE_NEXT_ID";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR";
//export const ADD_NEW_COMMENT_SUCCESS = "ADD_NEW_COMMENT_SUCCESS";
export const ADD_NEW_COMMENT_ERROR = "ADD_NEW_COMMENT_ERROR";

const BASE_URL="http://hiroba.czy-kasakun.com:8080";

/**
 * change next post ID
 */
export const commentChangeNextId = nextId => ({type: COMMENT_CHANGE_NEXT_ID, nextId});

/**
 * fetch comment list from back-end database
 * 1. send post request to query comments table from back-end database
 * 2. if success, dispatch fetchCommentsSuccess()
 * 3. if fail , dispatch fetchCommentsError()
 */
export const fetchComments = (postId) => {
	const BASE_PARAM = "comments/queryByPostId";
	const url = `${BASE_URL}/${BASE_PARAM}`;
	const body = `postId=${postId}`;
	return (dispatch) =>{
		apiPost (url, body)
			.then (data => {
				return dispatch(fetchCommentsSuccess(data, postId));
			})
			.catch (error => {
				return dispatch(fetchCommentsError(error));
		})
	}
}
export const fetchCommentsSuccess = (data, postId) => ({ type: FETCH_COMMENTS_SUCCESS, data, postId });
export const fetchCommentsError = (error) => ({ type: FETCH_COMMENTS_ERROR, error });

/**
 * add a new comment
 * 1. send post request to add a new comment into baack-end database
 * 2. if success, dispatch fetchComments() to fetch comment list snd refresh the page
 * 3. if fail, dispatch addNewCommentError()
 */
export const addNewCommentAsync = (data, postId, fromUid) => {
	const BASE_PARAM = "comments/addComment";
	let url = `${BASE_URL}/${BASE_PARAM}`;
	let body = `content=${data.commentContent}&postId=${postId}&fromUid=${fromUid}&toUid=1`;

	return (dispatch) =>{
		apiPost (url, body)
			.then (data => {
				if(data.code !== 200){
                    throw Error(data.code);
                }
				return dispatch(fetchComments(postId));
			})
				.catch (error => {
				return dispatch(addNewCommentError(error));
	  })
	}
}
//export const addNewCommentSuccess = () => ({ type: ADD_NEW_COMMENT_SUCCESS });
export const addNewCommentError = (error) => ({ type: ADD_NEW_COMMENT_ERROR, error });