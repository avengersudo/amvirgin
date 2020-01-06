import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import LoginWithSocial from './LoginWithSocial';
import cookie from 'react-cookies';
import { connect } from 'react-redux'
import * as actions from '../../actions';
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullname: "",
            pass1: "",
            confirmpassword: "",
            eml: "",
            number: "",
            checkbox: "",
            otp: ""
        }
    }
    togglePassword(){
        $(".toggle-password").toggleClass("fa-eye fa-eye-slash");
            var input = $($(".toggle-password").attr("toggle"));
        if (input.attr("type") === "password") {
            console.log("hii");
            input.attr("type", "text");
        } else {
            console.log("bye");
            input.attr("type", "password");
        }
    }
    flip(){
        document.querySelector("#flipper").classList.toggle("flip");
    }
    // ComponentWillMount() {
    //     this.props.otperror("")
    // }
    componentWillUnmount() {
        this.props.Signuperror("")
    }
    resendotp = () => {
        const { numb } = this.refs;
        console.log(numb.value);
        this.props.ResendOtp({
            "phone": numb.value,
        });
    }
    removeotp = () => {
        this.props.otphide()
    }
    otpverify = (e) => {
        e.preventDefault();
        //const token = cookie.load('cred')
        var otp = this.state.otp;
        this.props.OtpVerify({ otp });
    }
    
    handleOTPChange = event => {
        this.setState({
            otp: event.target.value
        })
    }

    handleBlur = () => {
        const { numb } = this.refs;
        const mobile = /^((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())$/.test(numb.value);
        if (!mobile) {
            this.setState({ number: "Invalid number" })
        } else {
            this.setState({ number: "" })
        }
        this.props.sendOtp({
            "phone": numb.value,
        });
    }
    componentDidMount(){
        var name1 = localStorage.getItem('name');
        var email1 = localStorage.getItem('email');
        var numb1 = localStorage.getItem('mobile');
        const { fname,email,numb } = this.refs;
        if(name1){
            fname.value = name1;
            localStorage.removeItem('name');
        }
        if(email1){
            email.value = email1;
            localStorage.removeItem('email');
        }
        if(numb1){
            numb.value = numb1;
            localStorage.removeItem('mobile');
        }
    }
    submit = () => {
        const {fname,email,numb,pass,cpass,check } = this.refs;
        const emailreg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        const mobile = /^((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())$/.test(numb.value);
        const vfname = fname.value.trim().length;
        //const alphfname = /^[A-z]+$/.test(fname.value.trim());
        const vpass = pass.value.trim().length;
        const vcpass = pass.value !== cpass.value;
        const vemail = emailreg.test(email.value);
        const Passexp =/[a-zA-Z0-9]*/.test(pass.value.trim());

        //Name Validation
        if (vfname < 2) {
            this.setState({ fullname: "required minimum 2 characters" })
        } else if (vfname >= 30) {
            this.setState({ fullname: "not more than 30 characters" })
        } else {
            this.setState({ fullname: "" })
        }

        //password validation
        if (vpass < 8) {
            this.setState({ pass1: "password must be of minimum 8 character" })
        } else if (vpass >= 16) {
            this.setState({ pass1: "password not more than 16 character" })
        } else if (!Passexp) {
            this.setState({ pass1: "password must be alphanumeric with special character" })
        } else {
            this.setState({ pass1: "" })
        }
        //confirm password validation
        if (vcpass) {
            this.setState({ confirmpassword: "password not match" })
        } else {
            this.setState({ confirmpassword: "" })
        }
        if (!vemail) {
            this.setState({ eml: "invalid email" })
        } else {
            this.setState({ eml: "" })
        }

        if (!mobile) {
            this.setState({ number: "Invalid number" })
        } else {
            this.setState({ number: "" })
        }

        if (!check.checked) {
            this.setState({ checkbox: "please check the checkbox" })
        } else {
            this.setState({ checkbox: "" })
        }

        if (vfname < 2 || vfname >= 30) { } else if (vpass < 8 || vpass >= 16) { } else if (vcpass) {
        } else if (!vemail) { } else if (!mobile) { } else if (!check.checked) { }
        else if (!Passexp) { }
        else {
            this.props.signupsubmitloader()
            this.setState({ fullname: "", pass1: "", confirmpassword: "", eml: "", number: "", checkbox: "" })
            this.props.userSignup(
                {
                    "name": fname.value.trim(),
                    "email": email.value,
                    "password": pass.value,
                    "password_confirmation": cpass.value,
                    "mobile": numb.value,
                    "otp":this.state.otp
                })
        }
    }
    renderAlert = () => {
        if (this.props.signuperror !== "") {
            return (
                <div className="form-group col-xs-10 col-sm-6 col-md-6 col-lg-6">
                    <div className="alert alert-danger">
                        <strong>Oops!&nbsp;</strong>{this.props.signuperror}
                    </div>
                </div>
            );
        }
    }
    render(){
        return(
            <div className="back">
                <div className="halfleft"><h6 className="title">Register</h6></div>
                <div className="halfleft">
                    <Link className="flipbutton halfright" id="registerButton" onClick={this.flip.bind(this)} to="#">Sign in →</Link>
                </div>
                <form className="loginsignupform">
                    <LoginWithSocial />
                    <hr className="hrsign" />
                    <h4 className="signwith">or Register with</h4>
                    <div className="input-field">
                        <input type="text" ref="fname" id="fullname" required />
                        {this.state.fullname !== "" ? <div className="alert error alert-danger newclpos" >
                        <strong>{this.state.fullname}</strong>
                            </div> : null}
                        <label htmlFor="fullname">Full Name *</label>
                    </div>
                    <div className="input-field">
                        <input type="email" ref="email" id="email" required />
                        {this.state.eml !=="" ? <div className="alert error alert-danger newclpos" >
                                <strong>{this.state.eml}</strong>
                            </div> : <div />}
                        <label htmlFor="email">Email *</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id="number" ref="numb" onBlur={this.handleBlur} required />
                        {this.state.number !=="" ? <div className="alert error alert-danger newclpos" >
                                <strong>{this.state.number}</strong>
                            </div> : <div />}
                        <label htmlFor="number">Mobile Number *</label>
                    </div>
                    <div className="input-field">
                        <input type="password" ref="pass" id="password-field2" required />
                        {this.state.pass1 !== "" ? <div className="alert error alert-danger newclpos" >
                                <strong>{this.state.pass1}</strong>
                        </div> : <div />}
                        <label htmlFor="password-field2">Password *</label>
                        <span toggle="#password-field2" className="fa fa-fw fa-eye field-icon toggle-password" onClick={this.togglePassword.bind(this)}></span>
                    </div>
                    <div className="input-field">
                        <input type="password" ref="cpass" id="confirm_password-field2" required />
                        {this.state.confirmpassword !=="" ? <div className="alert error alert-danger newclpos" >
                                <strong>{this.state.confirmpassword}</strong>
                            </div> : <div />}
                        <label htmlFor="confirm_password-field2">Confirm Password *</label>
                        <span toggle="#password" className="fa fa-fw fa-eye field-icon" ></span>
                    </div>
                    <input type="checkbox" ref="check" className="checkcheck" name="termscondition" value=""/>
                    {this.state.checkbox !=="" ? <div className="alert error alert-danger" style={{ position: "relative", float: "left" }}>
                        <strong>{this.state.checkbox}</strong>
                    </div> : <div />}
                    <span className="agreeinput"> I understand and agree to the 
                        <Link to="!#">Terms & Conditions</Link> and 
                        <Link to="!#">Private Policy</Link>
                    </span><br />
                    {this.renderAlert()}
                    <div style={{ clear: 'both' }}></div>
                    <input type="button" onClick={this.submit} value="Register"/>
                </form>

                <div className="modal fade in" role="dialog" style={{ display: this.props.signuploader ? "block" : "none" }}>
                    <div className="modal-dialog loader-modal" >
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <figure><img src="/img/loading.gif" className="pay-icon" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--otp Popup--> */}
                <div className="modal" role="dialog" style={{ display: this.props.otpmodel ? "block" : "none",top:'170px' }}>
                    <div className="modal-dialog otp_confirm">

                        {/* <!-- Modal content--> */}
                        <div className="modal-content model-box">
                            <div className="modal-body otpmodel text-center">
                                <i className="fa fa-times" onClick={this.removeotp} style={{ position: "absolute", right: "12px", top: "12px" }}></i>
                                <form className="form-signin otp" onSubmit={this.otpverify}>
                                    <div className="form-group col-xs-12 col-sm-7 col-md-7 col-lg-7 "><input type="text" value={this.state.otp} className="form-control" onChange={this.handleOTPChange} placeholder="Enter OTP" required autoFocus />
                                        {this.props.otperr !== "" ? <div className="alert alert-danger">
                                            <strong>Oops!&nbsp;</strong>{this.props.otperr}
                                        </div> : null}

                                    </div>
                                    <div className="form-group col-xs-12 col-sm-5 col-md-5 col-lg-5  "><button className=" verify-button " type="submit">
                                        Verify  </button></div>
                                </form>
                                <div className="footer-pay">
                                    <a onClick={this.resendotp} href="javascript:void(0)">Resend OTP</a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                {/* <!-- End otp Popup--> */}
                            </div>
                        
        );
    }
}

Register = connect(
    store =>({
        signuperror: store.Signuperror.signuperror,
        signuploader: store.loaderReducer.signuploader,
        otpmodel: store.loaderReducer.otpmodel,
        otperr: store.otpError.message,
    }),actions
)(Register)
export default Register;