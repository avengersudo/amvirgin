import React, { Component } from 'react';
import CategoryPagination from './CategoryPagination';
class CategoryProduct extends Component {
    render(){
        return(
            <div className="col-lg-9 content">
                <div className="shop-topbar-wrapper">
                    <div className="shop-topbar-left">
                    <p>Showing 1 - 20 of 30 results </p>
                    </div>
                    <div className="product-sorting-wrapper">
                    <div className="product-shorting shorting-style">
                        <label>View:</label>
                        <select>
                        <option value> 20</option>
                        <option value> 23</option>
                        <option value> 30</option>
                        </select>
                    </div>
                    <div className="product-show shorting-style">
                        <label>Sort by:</label>
                        <select>
                        <option value>Recommended</option>
                        <option value> What's New</option>
                        <option value> Popularity</option>
                        <option value> Better Discount</option>
                        <option value> Price: High to Low</option>
                        <option value> Price: Low to High</option>
                        <option value> Faster Delivery</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="shop-bottom-area">
                    <div className="tab-content jump">
                    <div id="shop-1" className="tab-pane active">
                        <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec">-30%</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Highlander</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$250.00</span>
                                    <span className="old">$270.00</span>
                                    <span className="off">20%</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Roadster</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$200.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec font-dec">NEW</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Levis</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$220.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Kook &amp; Keech</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$210.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec">-30%</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Highlander</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$250.00</span>
                                    <span className="old">$270.00</span>
                                    <span className="off">20%</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Roadster</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$200.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec font-dec">NEW</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Levis</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$220.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Kook &amp; Keech</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$210.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Kook &amp; Keech</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$210.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec">-30%</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Highlander</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$250.00</span>
                                    <span className="old">$270.00</span>
                                    <span className="off">20%</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Roadster</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$200.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec font-dec">NEW</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Levis</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$220.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Kook &amp; Keech</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$210.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec">-30%</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Highlander</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$250.00</span>
                                    <span className="old">$270.00</span>
                                    <span className="off">20%</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Roadster</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$200.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec font-dec">NEW</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Levis</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$220.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>	
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec font-dec">NEW</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Levis</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$220.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Kook &amp; Keech</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$210.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec">-30%</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Highlander</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$250.00</span>
                                    <span className="old">$270.00</span>
                                    <span className="off">20%</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Roadster</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$200.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="product-wrap mb-35">
                            <div className="product-img">
                                <a href="product-details"><img src="shopimg/img1.jpg" alt="product" /></a>
                                <span className="price-dec font-dec">NEW</span>
                            </div>
                            <div className="product-content">
                                <div className="hoverbtn">
                                <div className="row">
                                    <div className="partbtn">
                                    <button className="cartbtn">Add to Cart</button>
                                    </div>
                                    <div className="partbtn">
                                    <button className="wishlistbtn">Wishlist</button>
                                    </div>
                                </div>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span className="sizeshover">$210.00</span>
                                    </div>
                                </div>
                                <div className="sizeshover"><p><b>Sizes:</b> S, M, L, XL</p></div>	
                                <div className="product-action">
                                    <a title="Share" href="#"><i className="la la-share" /></a>
                                    <a title="Compare" href="#"><i className="la la-retweet" /></a>
                                </div>
                                </div>
                                <div className="paddingsection">
                                <span>Levis</span>
                                <h4><a href="product-details">Golden Easy Spot Chair.</a></h4>
                                <div className="price-addtocart">
                                    <div className="product-price">
                                    <span>$220.00</span>
                                    </div>
                                </div>
                                </div>	
                            </div>
                            </div>
                        </div>	
                        </div>
                    </div>
                    <CategoryPagination />
                    </div>
                </div>
            </div>
        );
    }
}
export default CategoryProduct;