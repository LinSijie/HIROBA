
import { getCachedData } from "../selectors";
import { apiGet, apiPost } from "../utils/apiMethod";
import { 
  FETCH_POSTS,
  fetchPostsSuccess,
  fetchPostsError,
  FETCH_POST,
  fetchPostSuccess,
  fetchPostError
} from "../actions";

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
