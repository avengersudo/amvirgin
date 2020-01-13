import React, { Component } from 'react';

class ShopByPrice extends Component {
    render(){
        return(
            <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
                <div className="rangeslidecontainer">
                <h4 className="sidebar-title">Price Range </h4>
                <input type="range" min={1} max={5000} defaultValue={50} className="rangeslider" id="myRange" />
                <p className="maxprice">Max: Rs.<span id="demo" /></p>
                </div>
            </div>				
            
        );
    }
}
export default ShopByPrice;