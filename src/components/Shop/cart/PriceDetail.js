import React, { Component } from 'react';

class PriceDetail extends Component {
    render(){
        return(
            <div className="price">
                <h3>PRICE DETAILS </h3>
                <div className="priceproduct">
                    <span>Bag Total</span><span className="desc">Rs.4,494</span>
                </div>
                <div className="priceproduct">
                    <span>Bag discount</span><span className="desc">Rs.-900</span>
                </div>
                <div className="priceproduct">
                    <span>Coupon Discount</span><span className="desc"><button className="applycoupon">Apply Coupon</button></span>
                </div>
                <div className="priceproduct">
                    <span>Order Total</span><span className="desc">Rs. 3,594</span>
                </div>
                <div className="priceproduct">
                    <span>Delivery Charges</span><span className="desc"><strike>149</strike> <span className="redspan">FREE</span></span>
                </div>
                <hr />
                <div className="priceproduct totalprice">
                    <span>Total</span><span className="desc">Rs. 3,594</span>
                </div>
                <button type="button" className="btn btn-raised btn-red">Place Order</button>
            </div>
                
        )
    }
}

export default PriceDetail;