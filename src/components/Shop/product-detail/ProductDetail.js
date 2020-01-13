import React, { Component } from 'react';

class ProductDetails extends Component {
    render(){
        return(
            <div className="detailproduct">
                <h4>PRODUCT DETAILS </h4>
                <p>Grey and Black colourblocked sweatshirt, has a hood, one pocket, long sleeves, straight hem</p>
                <h6>Size &amp; Fit</h6>
                <p>The model (height 6') is wearing a size M</p>
                <h6>Material &amp; Care</h6>
                <p>100% Cotton</p>
                <p>Machine-wash</p>
                <h6>Specifications</h6>
                <div className="row specification">
                <div className="col-md-6">
                    <h6>Sleeve Length</h6>
                    <h5>Long Sleeves</h5>
                </div>
                <div className="col-md-6">
                    <h6>Neck</h6>
                    <h5>Hood</h5>
                </div>
                <div className="col-md-6">
                    <h6>Pattern</h6>
                    <h5>Colourblocked</h5>
                </div>
                <div className="col-md-6">
                    <h6>Length</h6>
                    <h5>Regular</h5>
                </div>
                <div className="col-md-6">
                    <h6>Number of Pockets</h6>
                    <h5>3</h5>
                </div>
                <div className="col-md-6">
                    <h6>Lining Fabric</h6>
                    <h5>Unlined</h5>
                </div>
                <div className="col-md-6">
                    <h6>Occasion</h6>
                    <h5>Casual</h5>
                </div>
                <div className="col-md-6">
                    <h6>Hemline</h6>
                    <h5>Hem with Toggle</h5>
                </div>
                </div>
            </div>
            
        )
    }
}

export default ProductDetails;