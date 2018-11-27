/**
 * @author Zeyu Chen
 */

/**
 * Message
 */
const msg = {
	SUCCESS_MSG: { code: 200, msg:'Success' },
	INVALID_USER: { code: 1001, msg: 'User Not Found'},
	INVALID_PWD: { code: 1002, msg: 'Invalid Password' },
	INVALID_REQ: { code: 1003, msg: 'Invalid Request' },
	ERROR_UNKOWN: { code:9999, msg:'Error Unkonwn'}
}

 /**
 * This method is a json wrapper
 * 
 */
const jsonHelper = (res, ret) => {
	if(typeof ret === 'undefined') {
		res.json(msg.ERROR_UNKOWN);
	} else {
		res.json(ret);
	}
};

module.exports = {
	msg: msg,
	jsonHelper: jsonHelper
}