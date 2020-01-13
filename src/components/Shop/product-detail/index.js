import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import './style.css';
import Header from '../Header';
import Footer from '../../Footer';
import CustomerReview from './CustomerReview';
import SimilarProduct from './SimilarProduct';
import SlickImage from './SlickImage';
import ProductDetails from './ProductDetail';
import DeliveryOption from './DeliveryOption';

class ProductDetail extends Component {
    state = {
        curImage:"shopimg/img1.jpg"
    }

    smallImage = event => {
        this.setState({curImage:event.target.attributes.src.value})
      };
    render(){
        return(
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Amvirgin | Product Detail</title>
                </Helmet>
                <Header />
                <div className="sectionwhite">
                <div className="productsection container">
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Clothing</a></li>
                    <li>Hoodies</li>
                </ul>
                <div className="row">
                    <div className="col-md-6">
                    <div className="productpage">
                    <div className="fluid react-slick">
                        <div className="fluid__image-container">
                                <SlickImage 
                                        {...{
                                        rimProps: {
                                            shortImage:this.state.curImage
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flexboximg">
                    <div className="flexpart">
                        <img src="shopimg/img1.jpg" alt="" onClick={ this.smallImage}/>
                    </div>
                    <div className="flexpart">
                        <img src="shopimg/img14.jpg" alt=""  onClick={ this.smallImage}/>
                    </div>
                    <div className="flexpart">
                        <img src="shopimg/img1.jpg" alt="" onClick={ this.smallImage}/>
                    </div>
                    <div className="flexpart">
                        <img src="shopimg/img14.jpg" alt=""  onClick={ this.smallImage}/>
                    </div>
                    </div>
                    <div className="row wishlistbtn">
                        <div className="col50">
                            <button className="atb"><i className="fa fa-shopping-bag" aria-hidden="true" /> Add to Bag</button>
                        </div>
                        <div className="col50">
                            <button className="wlist"><i className="fa fa-heart" aria-hidden="true" /> Wishlist</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                    <h3 className="nameproduct"> Product Name</h3>
                    <h3 className="namedetail">Men Black &amp; Grey Colourblocked Hooded Sweatshirt</h3>
                    <hr />
                    <p>
                        <span className="newrate">Rs. 1000</span>
                        <span className="actualrate"><strike>Rs. 2000</strike></span>
                        <span className="offonrate">50% off</span>
                    </p>
                    <p className="producttax">inclusive of all tax</p>
                    <h4 className="ssize">Select Size</h4>
                    <div className="custom-radios">
                        <div>
                        <input type="radio" id="size-1" name="size" defaultValue="small" defaultChecked />
                        <label htmlFor="size-1">
                            <span>S</span>
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="size-2" name="size" defaultValue="medium" />
                        <label htmlFor="size-2">
                            <span>M</span>
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="size-3" name="size" defaultValue="large" />
                        <label htmlFor="size-3">
                            <span>L </span>
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="size-4" name="size" defaultValue="extralarge" />
                        <label htmlFor="size-4">
                            <span>XL </span>
                        </label>
                        </div>
                    </div>
                    <h4 className="ssize">Color Availabile</h4>
                    <div className="custom-radios coloravailable">
                        <div>
                        <input type="radio" id="color-1" name="color" defaultValue="color-1" defaultChecked />
                        <label htmlFor="color-1">
                            <span className="black" />
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="color-2" name="color" defaultValue="color-2" />
                        <label htmlFor="color-2">
                            <span className="green" />
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="color-3" name="color" defaultValue="color-2" />
                        <label htmlFor="color-3">
                            <span className="white" />
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="color-4" name="color" defaultValue="color-3" />
                        <label htmlFor="color-4">
                            <span className="blue"> </span>
                        </label>
                        </div>
                        <div>
                        <input type="radio" id="color-5" name="color" defaultValue="color-4" />
                        <label htmlFor="color-5">
                            <span className="red"> </span>
                        </label>
                        </div>
                    </div>
                    <hr />
                    <ProductDetails />
                    <DeliveryOption />
                    </div>
                </div>
                <hr />
                <CustomerReview />
                <hr />
                <SimilarProduct />
                </div>
                <Footer />
                </div>
                </div>
        )
    }
}

export default ProductDetail;