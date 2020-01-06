import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Header from '../Header';
import Footer from '../Footer';
import SignIn from './SignIn';
import Register from './Register';
import './style.css';

class SignUp extends Component {
    render(){
        return(
            <div className="loginbody">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Amvirgin | Account</title>
                </Helmet>
                <Header />
                <div className="formsection">
                    <div className="logologin">
                        <img src="img/logo2.png" alt="" />
                    </div>
                    <div className="flip-container">
                        <div className="flipper" id="flipper">
                            <SignIn />
                            <Register />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default SignUp;