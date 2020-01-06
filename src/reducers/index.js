import { combineReducers } from 'redux'
import { 
    RECEIVE_SIGNUP_RESPONSE,
    RESET_PASS_SUBMIT,
    RESET_PASS_RECEIVE,
    RESET_PASS_SUCCESS,
    RESET_PASS_MODEL,
    LOGIN_SUBMIT_LOADER,
    CLOSE_LOGIN_LOADER,
    SIGNUP_SUBMIT_LOADER,
    CLOSE_SIGNUP_LOADER,
    OTP_MODEL_SHOW,
    OTP_MODEL_HIDE,
    OTP_ERROR,
    UNAUTH_USER,
    AUTH_USER,
    RECEIVE_USER_BY_ID,
    RECEIVE_SIGNIN_RESPONSE,
 } from '../actions';


 ////////////////////auth reducer/////////////////////////

const auth = (state = {}, action) => {
    switch(action.type) {
        case AUTH_USER:
        return { authenticated: true};

        case UNAUTH_USER:
        return { authenticated: false };

        default:
        return state;
    }
}

///////////////////////signin error reducer///////////////////////////////

const Signinerr = (state = { signinerr: "" }, action ) => {
    switch(action.type){
        case RECEIVE_SIGNIN_RESPONSE: 
            return {
                signinerr: action.error
            }
            default:
                return state
    }
}

///////////////////////signup error reducer///////////////////////////////
const Signuperror = (state = { signuperror: ""}, action) => {
    switch(action.type){
        case RECEIVE_SIGNUP_RESPONSE:
            return {
                signuperror: action.error
            };
        default:
            return state
    }
}

const otpError = (state = { message: ""}, action) => {
    switch(action.type){
        case OTP_ERROR:
            return {
                message:action.error
            };
            default:
                return state
    }
}

const loaderReducer = (state = { resetpass: true, resetpasssucess: false, loginloader: false, signuploader: false, otpmodel: false}, action)=> {
    switch(action.type){
        case RESET_PASS_SUBMIT:
            return {
                ...state,
                resetpass: false
            }
        case RESET_PASS_RECEIVE:
            return {
                ...state,
                resetpass: true
            }
        case RESET_PASS_SUCCESS:
            return {
                ...state,
                resetpasssucess: true
            }
        case RESET_PASS_MODEL:
            return {
                ...state,
                resetpasssucess: false
            }
        case LOGIN_SUBMIT_LOADER:
            return {
                ...state,
                loginloader: true
            }
        case CLOSE_LOGIN_LOADER:
            return {
                ...state,
                loginloader: false
            }
    
        case SIGNUP_SUBMIT_LOADER:
            return {
                ...state,
                signuploader: true
            }
        case CLOSE_SIGNUP_LOADER:
            return {
                ...state,
                signuploader: false
            }
        case OTP_MODEL_SHOW:
            return {
                ...state,
                otpmodel: true
            }
        case OTP_MODEL_HIDE:
            return {
                ...state,
                otpmodel: false
            }
        default:
            return state
    }
}

//////////////reducer get user by id//////////////////////////

const userbyid = (state = { user: {} }, action ) => {
    switch(action.type){
        case RECEIVE_USER_BY_ID:
            return {
                user: action.user
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    Signuperror,
    Signinerr,
    auth,
    userbyid,
    otpError,
    loaderReducer
})

export default rootReducer;
