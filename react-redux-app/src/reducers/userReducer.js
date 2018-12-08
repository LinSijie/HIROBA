import {
	LOGIN_INIT,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGIN_ERROR,
	ADD_USER_INIT,
	ADD_USER_SUCCESS,
	ADD_USER_FAIL,
	ADD_USER_ERROR
} from '../actions/userAction'

let currUserId = {};

export const userReducer = (state = { code: {} }, action) => {
	switch(action.type) {
		case LOGIN_INIT:
			return { code: {}, userId: currUserId, isloading: true };
		case LOGIN_SUCCESS:
			currUserId = action.userId;
		  return { code: action.code, userId: currUserId, isloading: true };
		case LOGIN_FAIL:
			return { code: action.code, userId: currUserId, isloading: true };
		case LOGIN_ERROR:
			return { code: {}, userId: currUserId, error: action.error, isloading: false };
		case ADD_USER_INIT:
			return { code: {}, userId: currUserId, isloading: true };
		case ADD_USER_SUCCESS:
		  return { code: action.code, userId: currUserId, isloading: true };
		case ADD_USER_FAIL:
			return { code: action.code, userId: currUserId, isloading: true };
		case ADD_USER_ERROR:
			return { code: {}, userId: currUserId, error: action.error, isloading: false };
		default:
		  return state;
	  }
}