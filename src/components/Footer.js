import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <footer className="specific" >
                <div className="footer" style={{marginTop: '233px'}}>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4 footerline">
                                    <ul><h4>Legal</h4>
                                        <li>Privacy Policy</li>
                                        <li>Refund Policy</li>
                                        <li>Terms & Conditions</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footerline">
                                    <ul><h4>Customer</h4>
                                        <li>My Account</li>
                                        <li>Login</li>
                                        <li>Register</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 footerline">
                                    <ul><h4>Connect</h4>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footerlogo"><img src="img/logo2.png" alt="amvirgin"/></div>
                                <img className="appstore" src="img/appstore.png" alt="amvirgin"/>
                                <img className="googleplay" src="img/googleplay.png" alt="amvirgin"/>
                            </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;