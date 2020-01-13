import React, { Component } from 'react';

class ShopByCategories extends Component {
    render(){
        return(
            <div className="sidebar-widget shop-sidebar-border pt-40">
                <h4 className="sidebar-title">Shop By Categories</h4>
                <div className="shop-catigory mt-20">
                <ul id="faq">
                    <li> <a data-toggle="collapse" data-parent="#faq" href="#shop-catigory-1">Women Fashion <i className="la la-angle-down" /></a>
                    <ul id="shop-catigory-1" className="panel-collapse collapse show">
                        <li><a href="#">Dress </a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Sunglasses </a></li>
                        <li><a href="#">Sweater </a></li>
                        <li><a href="#">Handbag </a></li>
                    </ul>
                    </li>
                    <li> <a data-toggle="collapse" data-parent="#faq" href="#shop-catigory-2">Men Fashion <i className="la la-angle-down" /></a>
                    <ul id="shop-catigory-2" className="panel-collapse collapse">
                        <li><a href="#">Shirt </a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Sunglasses </a></li>
                        <li><a href="#">Sweater </a></li>
                        <li><a href="#">Jacket </a></li>
                    </ul>
                    </li>
                    <li> <a data-toggle="collapse" data-parent="#faq" href="#shop-catigory-3">Furniture <i className="la la-angle-down" /></a>
                    <ul id="shop-catigory-3" className="panel-collapse collapse">
                        <li><a href="#"> Chair</a></li>
                        <li><a href="#">Lift Chair</a></li>
                        <li><a href="#">Bunk Bed</a></li>
                        <li><a href="#">Computer Desk</a></li>
                        <li><a href="#">Bookcase</a></li>
                    </ul>
                    </li>
                    <li> <a href="#">Lamp</a></li>
                    <li> <a href="#">Electronics</a> </li>
                    <li> <a href="#">Accessories</a></li>
                </ul>
                </div>
            </div>
            
        );
    }
}
export default ShopByCategories;