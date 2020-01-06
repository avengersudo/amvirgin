import React, { Component } from 'react';
import './style.css';

class FocusBrand extends Component {
    render(){
        return(
            <div className="shopFocus">
                <h3 className="bfocus">Brands in Focus</h3>
                <div className="brandsinfocus row">
                    <div className="imgbrand">
                        <img src="shopimg/img11.jpg" alt=""/>
                        <div id="ribbon">
                            <div className="info" id="content">
                                <h4>Baggit</h4>
                                <h5> Upto 50% off </h5>
                            </div> 
                        </div>
                    </div>
                    <div className="imgbrand">
                        <img src="shopimg/img12.jpg" alt="" />
                        <div className="info">
                            <h4>Sassafras</h4>
                            <h5> Upto 50% off </h5>
                        </div> 
                    </div>

                    <div className="imgbrand">
                        <img src="shopimg/img13.jpg" alt="" />
                        <div className="info">
                            <h4>Roadster</h4>
                            <h5> Upto 50% off </h5>
                            
                        </div> 
                    </div>

                    <div className="imgbrand">
                        <img src="shopimg/img14.jpg" alt="" />
                        <div className="info">
                            <h4>Levis</h4>
                            <h5> Upto 50% off </h5>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default FocusBrand;