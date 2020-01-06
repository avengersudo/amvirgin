import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import { connect } from 'react-redux';
import * as actions from '../actions';
import cookie from 'react-cookies';
import './style.css';
class Header extends Component {
    componentWillMount(){
        var token = cookie.load('token');
        const { getuserbyid } = this.props;
        if(token){
            getuserbyid(token).then((res)=>{
                //console.log(res);
                if(res){
                    this.props.Recieveuserbyid(res.data)
                }else{
                    console.log("Data not available");
                }
            })
        }
    }
    logout = () => {
        const { signoutUser } = this.props;
        signoutUser();
    }
    renderLink(){
        if(!this.props.authenticated){
            return(
                <li className="nav-item lessmargin">
                    <Link className="nav-link" to="login">Sign in</Link>
                </li>
            );
        }else{
            return(
                <ul>
                    <li className="nav-item lessmargin">
                        <Link className="nav-link" to="/" data-toggle="tooltip" title={this.props.detail.name}><img className="userimage upp2" src="img/user.png" alt=""/></Link>
                        <ul>
                            <li>
                                <div onClick={this.logout} className="logout"><i className="fa fa-sign-out"></i>Logout</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        }
    }
    render(){
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 80) {
                $(".navbar").css("background-color", "linear-gradient(to bottom, #c00 0%, #900 100%)");
                $(".navbar").css("height", "50px");
                $(".logo").css("height", "50px");
            } else {
                $(".navbar").css("background-color", "linear-gradient(to bottom, #c00 0%, #900 100%)");
                $(".navbar").css("height", "90px");
                $(".logo").css("height", "50px"); 
            }
        });
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navclass specific"  id="navbar">
                    <Link className="navbar-brand" to="/">
                        <img className="logoheader" src="img/logo.png" alt="amvirgin" id="logo"/>
                    </Link>
                    <button className="mobbtn">
                        <span className="mobicon" onlick="openNav()">
                            <img className="mobmenuicon" src="img/mobmenu.png" alt="menu"/>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home 
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Chatmate</Link>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item upp2">
                                <div className="nav-item searchbtn">
                                    <div className="container">
                                        <form className="searchbox" method="post">
                                            <input type="search" placeholder="Search......" name="search" className="searchbox-input" onkeyup="buttonUp();" />
                                            <span className="searchbox-icon"><i className="fa fa-search"></i></span>
                                        </form>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item lessmargin ">
                                <Link className="nav-link" to="#"><img className="cart upp2" src="img/cart.png" alt="" /></Link>
                            </li>
                            <li className="nav-item lessmargin">
                                <Link className="nav-link" to="#"><img className="cart upp2" src="img/notification.png" alt=""/></Link>
                            </li>
                            {this.renderLink()}
                        </ul>
                        
                    </div>
                
                </nav>
            </React.Fragment>
        );
    }
}

export default connect(store => ({
    authenticated: store.auth.authenticated,
    detail: store.userbyid.user,
}),actions
)(Header);