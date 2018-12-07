
import { getCachedData } from "../selectors";
import { apiGet, apiPost } from "../utils/apiMethod";
import { 
  FETCH_POSTS,
  fetchPostsSuccess,
  fetchPostsError,
  FETCH_POST,
  fetchPostSuccess,
  fetchPostError
} from "../actions/postAction";
import {
  FETCH_COMMENTS,
  fetchCommentsSuccess,
  fetchCommentsError,
  ADD_NEW_COMMENT,
  addNewCommentSuccess,
  addNewCommentError
} from "../actions/commentAction"

const BASE_URL="http://hiroba.czy-kasakun.com:8080";

/**
 * 
 * fetch posts list
 */
export const fetchPostsMiddleware = store => next => action => {
  const BASE_PARAM = "posts/queryAll";

  if (action.type === FETCH_POSTS) {

    // temporarily do not need cache.
    const url = `${BASE_URL}/${BASE_PARAM}`;

    apiPost (url)
      .then (data => {
        return next (fetchPostsSuccess(data));
      })
      .catch (error => {
        return next(fetchPostsError(error));
      })
  }
  return next(action);
};
/**
 * 
 * fetch post content with certain postId
 */
export const fetchPostMiddleware = store => next => action => {
  const BASE_PARAM = "posts/queryById";

  if (action.type === FETCH_POST) {

    const url = `${BASE_URL}/${BASE_PARAM}`;
    const body = `id=${action.postId}`;

    apiPost (url, body)
      .then (data => {
        return next (fetchPostSuccess(data));
      })
      .catch (error => {
        return next(fetchPostError(error));
      })
  }
  return next(action);
};

/**
 * 
 * fetch comments list
 */
export const fetchCommentsMiddleware = store => next => action => {
  const BASE_PARAM = "comments/queryByPostId";

  if (action.type === FETCH_COMMENTS) {
    const url = `${BASE_URL}/${BASE_PARAM}`;
    const body = `postId=${action.postId}`;

    console.log("in fetchCommentMiddleware,action.postId=", action.postId);
    apiPost (url, body)
      .then (data => {
        console.log("in fetchCommentMiddleware,received data=", data);
        return next (fetchCommentsSuccess(data));
      })
      .catch (error => {
        return next(fetchCommentsError(error));
      })
  }
  return next(action);
};

/**
 * 
 * send post request to add new comment
 * then fetch updated comments list to refresh the page
 */
export const fetchNewCommentMiddleware = store => next => action => {
  const BASE_PARAM_ADD = "comments/addComment";
  const BASE_PARAM_QUERY_BY_POST_ID = "comments/queryByPostId"

  if (action.type === ADD_NEW_COMMENT) {
    console.log("in fetchNewCommentMiddleware,action.data=", action.data);
    console.log("in fetchNewCommentMiddleware,action.postId=", action.postId);
    let url = `${BASE_URL}/${BASE_PARAM_ADD}`;
    let body = `content=${action.data.commentContent}&postId=${action.postId}&fromUid=2&toUid=1`;

    apiPost (url, body)
      .then (data => {
        console.log("1st apiPost");
        return next(addNewCommentSuccess(data));
      })
      .catch (error => {
        return next(addNewCommentError(error));
      })

    // url = `${BASE_URL}/${BASE_PARAM_QUERY_BY_POST_ID}`;
    // body = `postId=${action.postId}`;

    // // apiPost (url, body)
    // //   .then (data => {
    // //     console.log("2nd apiPost,received data=", data);
    // //     return next (fetchCommentsSuccess(data));
    // //   })
    // //   .catch (error => {
    // //     return next(fetchCommentsError(error));
    // //   })
  }
  return next(action);
};