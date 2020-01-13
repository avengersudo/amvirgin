import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Header from '../Header';
import SubMenu from '../Submenu';
import Footer from '../../Footer';
import AlsoLike from './AlsoLike';
import PriceDetail from './PriceDetail';

class Cart extends Component {
    render(){
        return(
            <div style={{background:'#fff'}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Amvirgin | Cart</title>
                </Helmet>
                <Header />
                <SubMenu />
                <div className="container">
                <div className="cartsection">
                    <div className="product">
                    <div className="leftpart">
                        <div className="row">
                        <div className="col-md-2">
                            <div className="cartproduct">
                            <img src="shopimg/img1.jpg" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                            <div className="details1">
                                <h5>HERE&amp;NOW</h5>
                                <p>Women White Printed Round Neck T-shirt</p>
                                <p><span>Sold by: Unistand</span></p>
                                <div className="quantity">
                                <div className="form-group">
                                    <label htmlFor="qty">Qty:</label>
                                    <select className="form-control" id="qty">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="size">Size:</label>
                                    <select className="form-control" id="size">
                                    <option>XXS</option>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                    </select>
                                </div>
                                </div>
                                <div className="btns">
                                <button className="removebtncart">Remove</button>
                                <button className="wishlistcart">Move to Wishlist</button>
                                </div>
                            </div>
                            <div className="details2">
                                <p className="priceoff"> Rs. 1500</p>
                                <p className="pricereal"><strike> Rs. 3000</strike> <span>50% off </span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="leftpart">
                        <div className="row">
                        <div className="col-md-2">
                            <div className="cartproduct">
                            <img src="shopimg/img2.jpg" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                            <div className="details1">
                                <h5>HERE&amp;NOW</h5>
                                <p>Women White Printed Round Neck T-shirt</p>
                                <p><span>Sold by: Unistand</span></p>
                                <div className="quantity">
                                <div className="form-group">
                                    <label htmlFor="qty">Qty:</label>
                                    <select className="form-control" id="qty">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="size">Size:</label>
                                    <select className="form-control" id="size">
                                    <option>XXS</option>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                    </select>
                                </div>
                                </div>
                                <div className="btns">
                                <button className="removebtncart">Remove</button>
                                <button className="wishlistcart">Move to Wishlist</button>
                                </div>
                            </div>
                            <div className="details2">
                                <p className="priceoff"> Rs. 1500</p>
                                <p className="pricereal"><strike> Rs. 3000</strike> <span>50% off </span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="leftpart">
                        <div className="row">
                        <div className="col-md-2">
                            <div className="cartproduct">
                            <img src="shopimg/img4.jpg" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                            <div className="details1">
                                <h5>HERE&amp;NOW</h5>
                                <p>Women White Printed Round Neck T-shirt</p>
                                <p><span>Sold by: Unistand</span></p>
                                <div className="quantity">
                                <div className="form-group">
                                    <label htmlFor="qty">Qty:</label>
                                    <select className="form-control" id="qty">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="size">Size:</label>
                                    <select className="form-control" id="size">
                                    <option>XXS</option>
                                    <option>XS</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                    </select>
                                </div>
                                </div>
                                <div className="btns">
                                <button className="removebtncart">Remove</button>
                                <button className="wishlistcart">Move to Wishlist</button>
                                </div>
                            </div>
                            <div className="details2">
                                <p className="priceoff"> Rs. 1500</p>
                                <p className="pricereal"><strike> Rs. 3000</strike> <span>50% off </span></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <PriceDetail />
                </div>
                </div>
                <AlsoLike />
                <Footer /> 
            </div>
        )
    }
}

export default Cart;