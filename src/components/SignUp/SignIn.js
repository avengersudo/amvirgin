import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import LoginWithSocial from './LoginWithSocial';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignIn extends Component {
    state = {
        emailId: "",
        password: "",
        otpErr: "",
        loginBtn:false,
    }
    togglePassword(){
        $(".toggle-password").toggleClass("fa-eye fa-eye-slash");
            var input = $($(".toggle-password").attr("toggle"));
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    }
    flip(){
        document.querySelector("#flipper").classList.toggle("flip");
    }
    componentWillMount() {
        this.props.Signinerror("")
    }

    renderAlert(){
        if(this.props.signinerr !==""){
            return(
                <div className="alert alert-danger">
                    <strong>Oops!&nbsp;</strong>{this.props.signinerr}
                </div>
            )
        }
    }

    handleForOtp = () => {
        this.setState({loginBtn:!this.state.loginBtn})
    }

    submit = () => {
        const { email, pass, otp } = this.refs;
        const emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm.test(email.value);
        const mobile = /^((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())$/.test(email.value);
        if(!(mobile || emailreg)){
            this.setState({ emailId: "Not valid email or mobile number" })
        }else {
            this.setState({ emailId: "" })
        }
        if(this.state.loginBtn===false){
            if(pass.value.trim().length <= 0){
                this.setState({ password: "Password required" })
            }else{
                this.setState({ password: "" })
            }
        }else if(this.state.loginBtn===true){
            if(otp.value.trim().length <= 0){
                this.setState({ otpErr: "OTP required" })
            }else{
                this.setState({ otpErr: "" })
            }
        }

        if(this.state.loginBtn===false){ 
            if(pass.value.trim().length <= 0){} 
        }
        if(this.state.loginBtn===true){ 
            if(otp.value.trim().length <= 0){}
        }
        if(!(mobile || emailreg)){}
        else{
            if(this.state.loginBtn===false){
                if(!isNaN(email.value)){
                    localStorage.setItem("email", email.value.trim())
                    this.props.signIn({ type:2, mobile: email.value.trim(), password:pass.value.trim() })
                }else if(isNaN(email.value)){
                    this.props.signIn({ type:1, email: email.value.trim().toLowerCase(), password:pass.value.trim() })
                }
            }
            else if(this.state.loginBtn===true){
                if(!isNaN(email.value)){
                    localStorage.setItem("email", email.value.trim())
                    this.props.signIn({ type:3, mobile: email.value.trim(), otp:otp.value.trim() })
                }
            }
        }
    }
    handleBlur = () => {
        const { email } = this.refs;
        const mobile = /^((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())$/.test(email.value);
        if (!mobile) {
            this.setState({ number: "Invalid number" })
        } else {
            this.setState({ number: "" })
        }
        this.props.sendOtp({
            "phone": email.value,
        });
    }

    componentDidMount(){
        if(localStorage.getItem("email")){
            this.refs.email.value = localStorage.getItem("email");
        }
    }
    render(){
        const loginWithOtp = (
            <div>
                <button type="button" className="changeBtn" size="large">Login With OTP</button>
            </div>
        )
        const loginWithPwd = (
            <div>
                <button type="button" className="changeBtn" size="large">Login With Password</button>
            </div>
        )
        if(!this.props.authenticated){
            return(
                <div className="front">
                    <div className="halfleft"><h6 className="title">Sign in</h6></div>
                    <div className="halfleft">
                        <Link className="flipbutton halfright" id="loginButton" to="#" onClick={this.flip.bind(this)}>Register →</Link>
                    </div>
                    <form className="loginsignupform">
                        <LoginWithSocial />
                        <hr className="hrsign" />
                        <h4 className="signwith">or sign in with</h4>

                        <div style={{width: '43%',marginBottom: '30px',marginLeft: '65px'}} onClick={() => this.handleForOtp()}>
                            {this.state.loginBtn  ? loginWithPwd : loginWithOtp}
                        </div>

                        <div className="input-field">
                            <input type="text" ref="email" id="emailorname"  onBlur={this.handleBlur} required />
                            {this.state.emailId !=="" && <div className="alert error alert-danger">
                                <strong>{this.state.emailId}</strong>
                            </div>}
                            <label htmlFor="emailorname">{this.state.loginBtn ? "Mobile Number" : "Email or Mobile Number"} *</label>
                        </div>
                        
                        <div className="input-field" style={{display: this.state.loginBtn ? 'none' : 'block' }}>
                            <input type="password" ref="pass" id="password-field" required />
                            {this.state.password !=="" && <div className="alert error alert-danger" >
                                <strong>{this.state.password}</strong>
                            </div>}
                            <label htmlFor="password-field">Password *</label>
                            <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" onClick={this.togglePassword.bind(this)}></span>
                        </div>
                    
                        <div className="input-field" style={{display: this.state.loginBtn ? 'block' : 'none' }}>
                            <input type="text" ref="otp" id="otp-field" required />
                            {this.state.otpErr !=="" && <div className="alert error alert-danger">
                                <strong>{this.state.otpErr}</strong>
                            </div>}
                            <label htmlFor="otp-field">OTP *</label>
                        </div>
                        
                        {/* <input type="checkbox" className="checkcheck" name="termscondition" value=""/>
                            <span className="agreeinput"> I understand and agree to the 
                                <Link to="!#">Terms & Conditions</Link> and 
                                <Link to="!#">Private Policy</Link>
                            </span><br /> */}
                            <Link to="!#" className="forgotpwd">Forgot Password? </Link>
                            {/* {this.renderAlert()} */}
                        <input type="button" onClick={this.submit} className="signinbtn" value="Sign in"/>
                    </form>
                </div>
                                
            );
        }
        else{
            return <Redirect to="/" />
        }
    }
}

export default connect(
    store => ({
        singinerr: store.Signinerr.signinerr,
        authenticated: store.auth.authenticated,
        //loginloader: store.loadReducer.loginloader
    }),actions
)(SignIn);