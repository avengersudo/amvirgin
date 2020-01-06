import { apiCustomer } from '../credential.json';
import axios from 'axios';
import cookie from "react-cookies";

export const RECEIVE_SIGNUP_RESPONSE = "RECEIVE_SIGNUP_RESPONSE"
export const RESET_PASS_SUBMIT = "RESET_PASS_SUBMIT"
export const RESET_PASS_RECEIVE = "RESET_PASS_RECEIVE"
export const RESET_PASS_SUCCESS = "RESET_PASS_SUCCESS"
export const RESET_PASS_MODEL = "RESET_PASS_MODEL"
export const LOGIN_SUBMIT_LOADER = "LOGIN_SUBMIT_LOADER"
export const CLOSE_LOGIN_LOADER = "CLOSE_LOGIN_LOADER"
export const OTP_MODEL_SHOW = "OTP_MODEL_SHOW"
export const OTP_MODEL_HIDE = "OTP_MODEL_HIDE"
export const CLOSE_SIGNUP_LOADER = "CLOSE_SIGNUP_LOADER"
export const SIGNUP_SUBMIT_LOADER = "SIGNUP_SUBMIT_LOADER"
export const OTP_ERROR = "OTP_ERROR"
export const RECIEVE_SIGNUP_RESPONSE = "RECIEVE_SIGNUP_RESPONSE"
export const UNAUTH_USER = 'UNAUTH_USER'
export const AUTH_USER = 'AUTH_USER'
export const RECEIVE_USER_BY_ID = 'RECEIVE_USER_BY_ID'
export const RECEIVE_SIGNIN_RESPONSE = 'RECEIVE_SIGNIN_RESPONSE'


/////////////////signout action/////////////////////////

export const signoutUser = () => {
    cookie.remove('token');
    return { type: UNAUTH_USER };
  }

export const sendOtp = (val) => {
    var headers = {
        'Content-Type': 'application/json'
    }
    return(dispatch, getState) => {
        axios.get(`${apiCustomer}?mobile=${val.phone}&type=2`,headers)
        .then(function(response){
            console.log(response)
            if(response.data.status===404){
                dispatch({ type: OTP_MODEL_SHOW })
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
}
//////////////// resend otp //////////////

export const ResendOtp = (val) => {
    var headers = {
        'Content-Type': 'application/json'
    }
    return(dispatch, getState) => {
        axios.get(`${apiCustomer}?mobile=${val.phone}&type=2`,headers)
        .then(function(response){
            //console.log(response)
        })
        .catch(function(err){
            //console.log(err);
        })
    }
  }
export const otphide = () => (dispatch, getState) => {
    dispatch(otphide1())
}
////////////////otp verify//////////////
export const OtpVerify = (body) => (dispatch, getState) => {
    dispatch(otphide1())
}
export const otphide1 = () => ({
    type: OTP_MODEL_HIDE
})
// Authuser
export const Authuser = () => ({
type: AUTH_USER
});
export const userSignup = (body) => {
    var headers = {
        'Content-Type': 'application/json'
    }
    return(dispatch, getState) => {
        axios.post(`${apiCustomer}/register`,body,headers)
        .then(function(response){
            //console.log(response);
            if(response.data.status===201){
                let token = response.data.data.token;
                localStorage.setItem("name", response.data.data.name);
                localStorage.setItem("email", response.data.data.email);
                localStorage.setItem("mobile", response.data.data.mobile);
                cookie.save('token', token, {
                    path: '/',
                    maxAge: 60 * 60 * 24,
                    expire: 60 * 60 * 24
                })
                dispatch({ type: CLOSE_SIGNUP_LOADER });
                dispatch({type:AUTH_USER});
                dispatch(Signuperror(response.data.message));
                    //return <Redirect to='/' />
            }else{
                dispatch({ type: CLOSE_SIGNUP_LOADER })
                dispatch(Signuperror(response.data.message));
            }
            console.log(response)
        })
        .catch(function(err){
            console.log(err);
        })
        
    }
}

/////////////////////signin error recieved/////////////////////////////
export const Signinerror = (err) => ({
    type: RECEIVE_SIGNIN_RESPONSE,
    err
})

/////////////////////////sign in form data//////////////////////
export const signIn = (body) => {
    return(dispatch, getState) => {
        axios.post(`${apiCustomer}/login`,body)
        .then(function(response) {
            console.log(response);
            if(response.data.status===200){
                dispatch({ type: CLOSE_LOGIN_LOADER })
                dispatch({ type: AUTH_USER });
                cookie.save('token', response.data.data.token, {
                    path: '/',
                    maxAge: 60 * 60 * 24,
                    expire: 60 * 60 * 24,
                }
                );
            }else if(response.data.status!==200){
                dispatch(Signinerror(response.data.message))
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
}

export const signupsubmitloader = () => ({
    type: SIGNUP_SUBMIT_LOADER
  });

/////////////////recieve user by token////////////////////////////
export const Recieveuserbyid = (user) =>({
    type: RECEIVE_USER_BY_ID,
    user
})

//////////////////////get user detail by token/////////////////////
export const getuserbyid = (token) => (dispatch, getState) => {
    return new Promise(function(resolve, reject){
        axios.get(`${apiCustomer}/profile`,
        { headers: {"Authorization" : `Bearer ${token}`} }
        )
        .then(function(response){
            if(response.status === 200){
                //console.log(response.data.data);
                dispatch(Recieveuserbyid(response.data))
                dispatch({type:AUTH_USER});
            }
            resolve(response.data)
        })
        .catch(function(err){
            reject(err);
        })
    })
}

//////////////////////signup error recieved//////////////////////////

export const Signuperror = (error) => ({
    type: RECIEVE_SIGNUP_RESPONSE,
    error
})