export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const FETCH_POST = "FETCH_POST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";
export const POST_CHANGE_NEXT_ID = "POST_CHANGE_NEXT_ID";

export const CACHE_SET = "CACHE_SET";

export const fetchPosts = () => ({ type: FETCH_POSTS });
export const fetchPostsSuccess = (data) => ({ type: FETCH_POSTS_SUCCESS, data });
export const fetchPostsError = (error) => ({ type: FETCH_POSTS_ERROR, error });

export const fetchPost = postId => ({ type: FETCH_POST, postId });
export const fetchPostSuccess = data => ({ type: FETCH_POST_SUCCESS, data });
export const fetchPostError = error => ({ type: FETCH_POST_ERROR, error });
export const postChangeNextId = nextId => ({type: POST_CHANGE_NEXT_ID, nextId})

export const cacheSet = (key, value) => ({ type: CACHE_SET, key, value });