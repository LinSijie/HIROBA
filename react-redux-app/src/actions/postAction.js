import { apiPost } from "../utils/apiMethod";

const BASE_URL="http://hiroba.czy-kasakun.com:8080";

/**
 * fetch post list from back-end database
 * 1. send post request to query posts table from back-end database
 * 2. if success, dispatch fetchPostsSuccess()
 * 3. if fail, dispatch fetchPostsError()
 */
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";
export const fetchPosts = () => {
    const BASE_PARAM = "posts/queryAll";
    const url = `${BASE_URL}/${BASE_PARAM}`;
    return (dispatch) => {
        apiPost (url)
            .then (data => {
            return dispatch(fetchPostsSuccess(data));
            })
            .catch (error => {
            return dispatch(fetchPostsError(error));
        })
    }
}
export const fetchPostsSuccess = (data) => ({ type: FETCH_POSTS_SUCCESS, data });
export const fetchPostsError = (error) => ({ type: FETCH_POSTS_ERROR, error });

/**
 * change next post ID
 */
export const POST_CHANGE_NEXT_ID = "POST_CHANGE_NEXT_ID";
export const postChangeNextId = nextId => ({type: POST_CHANGE_NEXT_ID, nextId})

/**
 * fetch a certain post by postId
 * 1. send post request to query post table by postId
 * 2. if success, dispatch fetchPostSuccess()
 * 3. if fail, dispatch fetchPostError()
 * 
 */
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";
export const fetchPost = postId => {
    const BASE_PARAM = "posts/queryById";
    const url = `${BASE_URL}/${BASE_PARAM}`;
    const body = `id=${postId}`;
    return (dispatch) =>{
        apiPost (url, body)
            .then (data => {
            return dispatch(fetchPostSuccess(data));
            })
            .catch (error => {
            return dispatch(fetchPostError(error));
        })
    }
}
export const fetchPostSuccess = data => ({ type: FETCH_POST_SUCCESS, data });
export const fetchPostError = error => ({ type: FETCH_POST_ERROR, error });


export const CACHE_SET = "CACHE_SET";
export const cacheSet = (key, value) => ({ type: CACHE_SET, key, value });