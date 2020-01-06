import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class PopularStuff extends Component {
    render(){
        return(
            <>
            <h4 className="fivesechead">Popular Stuff</h4>
            <div className="fivesections row">
                <div className="col-md-6">
                    <div className="imgsmall containerimg4 bigimg">
                        <div className="fivedetailsbig">
                            <h3>Winterwear </h3>
                            <h5> Upto 30% off </h5>
                        </div>
                        <Link to="#" >
                            <div className="mainimg4">
                                <img className="image majorimg" src="shopimg/img3.jpg" alt="" />
                            </div>
                            <div className="middle">
                                <div className="text snowbtn">SHOP NOW</div>
                            </div>
                        </Link> 
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="imgsmall containerimg4">
                        <Link to="!#">
                            <div className="fivedetails">
                                <h3>Dresses </h3>
                                <h5> Upto 30% off </h5>
                            </div>
                            <div className="mainimg4">
                                <img className="image majorimg" src="shopimg/img1.jpg" alt="" />
                            </div>
                            <div className="middle">
                                <div className="text snowbtn">SHOP NOW </div>
                            </div>
                        </Link>
                    </div>
                    <div className="imgsmall containerimg4">
                        <Link to="!#">
                            <div className="fivedetails">
                                <h3>Accessories </h3>
                                <h5> Upto 30% off </h5>
                            </div>
                            <div className="mainimg4">
                                <img className="image majorimg" src="shopimg/img8.jpg" alt="" />
                            </div>
                            <div className="middle">
                                <div className="text snowbtn">SHOP NOW </div>
                            </div>
                        </Link>
                    </div>
                    <div className="imgsmall containerimg4">
                        <Link to="!#">
                            <div className="fivedetails">
                                <h3>Bottomwear </h3>
                                <h5> Upto 30% off </h5>
                            </div>
                            <div className="mainimg4">
                                <img className="image majorimg" src="shopimg/img4.jpg" alt="" />
                            </div>
                            <div className="middle">
                                <div className="text snowbtn">SHOP NOW </div>
                            </div>
                        </Link>
                    </div>
                    <div className="imgsmall containerimg4">
                        <Link to="!#">
                            <div className="fivedetails">
                                <h3>Caps & Scarfs </h3>
                                <h5> Upto 30% off </h5>
                            </div>
                            <div className="mainimg4">
                                <img className="image majorimg" src="shopimg/img2.jpg" alt="" />
                            </div>
                            <div className="middle">
                                <div className="text snowbtn">SHOP NOW </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default PopularStuff;