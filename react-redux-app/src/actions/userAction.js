import { apiPost } from "../utils/apiMethod";
export const LOGIN_INIT = "LOGIN_INIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const ADD_USER_INIT = "ADD_USER_INIT";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";
export const ADD_USER_ERROR = "ADD_USER_ERROR";

const BASE_URL="http://hiroba.czy-kasakun.com:8080";

/**
 * query by userId to find if a certain user exists 
 * 1. send post request to query user table by userId
 * 2. if success, dispatch fetchUserSuccess()
 * 3. if fail, dispatch fetchUserError()
 * 
 */

export const login = formData => {
    const BASE_PARAM = "users/login";
    const url = `${BASE_URL}/${BASE_PARAM}`;
    const body = `id=${formData.userId}&password=${formData.password}`;
    return (dispatch) =>{
        apiPost (url, body)
            .then (data => {
                if(data.code === 200){
                    return dispatch(loginSuccess(data.code, formData.userId));
                } else {
                    return dispatch(loginFail(data.code));
                }
            })
            .catch (error => {
            return dispatch(loginError(error));
        })
    }
}
export const loginInit = () => ({type: LOGIN_INIT});
export const loginSuccess = (code, userId) => ({type: LOGIN_SUCCESS, code, userId});
export const loginFail = code => ({type: LOGIN_FAIL, code});
export const loginError = code => ({type: LOGIN_ERROR, code});


export const addUser = data => {
    const BASE_PARAM = "users/addUser";
    const url = `${BASE_URL}/${BASE_PARAM}`;
    const body = `id=${data.id}&username=${data.username}&password=${data.password}&class=${data.identity}&email=${data.email}`;
    return (dispatch) =>{
        apiPost (url, body)
            .then (data => {
                if(data.code === 200){
                    return dispatch(addUserSuccess(data.code));
                } else {
                    return dispatch(addUserFail(data.code));
                }
            })
            .catch (error => {
            return dispatch(addUserError(error));
        })
    }
}
export const addUserInit = () => ({type: ADD_USER_INIT});
export const addUserSuccess = code => ({type: ADD_USER_SUCCESS, code});
export const addUserFail = code => ({type: ADD_USER_FAIL, code});
export const addUserError = code => ({type: ADD_USER_ERROR, code});