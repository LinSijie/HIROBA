/**
 * 
 * action creators
 */

// export const register = (userFormData) => {
//     console.log("register action", userFormData);
//     return {
//         type: 'register',
//         userFormData
//     };
// }

/**
 * 
 * update state.isLoggedIn
 */
export const login = (userFormData) => {
    console.log("login action", userFormData);
    return {
        type: 'login',
        userFormData
    };
}

/**
 * 
 * update state.user
 */
export const fetchUser = (Username) => {
    console.log("fetch user action", Username);
    return {
        type: 'fetchUser',
        Username
    };
}

/**
 * 
 * update state.post
 */
export const fetchPost = (postId) => {
    console.log("fetch post action", postId);
    return {
        type: 'fetchPost',
        postId
    };
}

/**
 * 
 * update state.comment
 */
export const fetchComment = (postId) => {
    console.log("fetch comment action", postId);
    return {
        type: 'fetchComment',
        postId
    };
}