
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
  FETCH_NEW_COMMENT,
  fetchNewCommentSuccess,
  fetchNewCommentError
} from "../actions/commentAction"

const BASE_URL="http://hiroba.czy-kasakun.com:8080";

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

export const fetchCommentsMiddleware = store => next => action => {
  const BASE_PARAM = "comments/queryByPostId";

  if (action.type === FETCH_COMMENTS) {
    const url = `${BASE_URL}/${BASE_PARAM}`;
    const body = `postId=${action.postId}`;

    apiPost (url, body)
      .then (data => {
        return next (fetchCommentsSuccess(data));
      })
      .catch (error => {
        return next(fetchCommentsError(error));
      })
  }
  return next(action);
};

export const fetchNewCommentMiddleware = store => next => action => {
  const BASE_PARAM = "comments/addComment";

  if (action.type === FETCH_NEW_COMMENT) {
    console.log("in fetchNewCommentMiddleware,action.data=", action.data);
    console.log("in fetchNewCommentMiddleware,action.postId=", action.postId);
    const url = `${BASE_URL}/${BASE_PARAM}`;
    const body = `id=9&content=${action.data.commentContent}&postId=${action.data.postId}&fromUid=2&toUid=1`;

    apiPost (url, body)
      .then (data => {
        return next (fetchNewCommentSuccess(data));
      })
      .catch (error => {
        return next(fetchNewCommentError(error));
      })
  }
  return next(action);
};