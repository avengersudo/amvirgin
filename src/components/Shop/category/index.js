import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import '../categorystyle.css';
import { Link } from 'react-router-dom';
import Header from '../Header';
import SubMenu from '../Submenu';
import Footer from '../../Footer';
import CategorySearch from './CategorySearch';
import CategorySidebar from './CategorySidebar';
import CategoryProduct from './CategoryProduct';

class Category extends Component {
    render(){
        return(
            <div className="shopMain">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Amvirgin | Category</title>
                </Helmet>
                <Header />
                <SubMenu />
                <div className="main-wrapper specific">
                    <div className="mobile-off-canvas-active">
                    <a className="mobile-aside-close"><i className="la la-close" /></a>
                    <div className="header-mobile-aside-wrap">
                        <div className="mobile-search">
                        <form className="search-form" action="#">
                            <input type="text" placeholder="Search entire store…" />
                            <button className="button-search"><i className="la la-search" /></button>
                        </form>
                        </div>
                        <div className="mobile-social-wrap">
                        <a className="facebook" href="#"><i className="ti-facebook" /></a>
                        <a className="twitter" href="#"><i className="ti-twitter-alt" /></a>
                        <a className="pinterest" href="#"><i className="ti-pinterest" /></a>
                        <a className="instagram" href="#"><i className="ti-instagram" /></a>
                        <a className="google" href="#"><i className="ti-google" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="shop-area pt-60 pb-60">
                    <div className="container-fluid">
                        <div className="main-content">
                        <div className="row flex-row">
                            <CategorySidebar />
                            <CategoryProduct />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Category