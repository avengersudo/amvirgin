import React, { Component } from 'react';

class DeliveryOption extends Component {
    render(){
        return(
            <div className="deliveryoption">
                <h4>Delivery options </h4>
                <h6>Pincode Availability</h6>
                <form autoComplete="off">
                    <input type="text" placeholder="Enter pincode" className="pincode-code col-md-5" name="pincode" />
                    <input type="submit" className="pincode-check pincode-button col-md-2" value="Check" />
                </form>
                <ul>
                <li>100% Original Products</li>
                <li>Free Delivery on order above Rs. 1199</li>
                <li>Cash on delivery might be available</li>
                <li>Easy 15 days returns and exchanges</li>
                <li>Try &amp; Buy might be available</li>
                </ul>
                <p>Product Code: <b>10617902</b></p>
                <p>Sold by: <b>WandWagon</b> </p>
            </div>
            
        )
    }
}

export default DeliveryOption;