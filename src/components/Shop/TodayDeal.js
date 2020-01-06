import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './style.css';

class TodayDeal extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        var settings = {
            dots: this.props.dots,
            arrows: this.props.arrows,
            infinite: this.props.infinite,
            speed: this.props.speed,
            slidesToShow: this.props.slidesToShow,
            slidesToScroll: this.props.slidesToScroll
          };
        return(
            <div className="topdeals shopToday">
                <div className="row titlesec titledeal">
                    <div className="col-md-9 col6"><h6 className="underline whitetext">Today's Deals</h6></div>
                    <div className="col-md-3 col6"><Link className="shopbtn" to="">See All Deals</Link></div>
                </div>
                <div className="slidervideo">
                <Slider {...settings}>
                    <div>
                        <div className="infoproduct">
                            <img src="shopimg/tshirtblue.jpg" alt=""/>	
                            <h5>Lorem ipsum </h5>	
                            <h4>Rs. 1200</h4>
                            <i className="fa fa-heart-o heartstyle"></i>
                            <i className="fa fa-shopping-cart cartstyle"></i>
                        </div>	
                    </div>
                    <div>
                        <div className="infoproduct">
                            <img src="shopimg/tshirtorange.jpg" alt=""/>	
                            <h5>Lorem ipsum </h5>	
                            <h4>Rs. 1200</h4>
                            <i className="fa fa-heart-o heartstyle"></i>
                            <i className="fa fa-shopping-cart cartstyle"></i>
                        </div>
                    </div>
                    <div>
                        <div className="infoproduct">
                            <img src="shopimg/tshirtyellow.jpg" alt=""/>	
                            <h5>Lorem ipsum </h5>	
                            <h4>Rs. 1200</h4>
                            <i className="fa fa-heart-o heartstyle"></i>
                            <i className="fa fa-shopping-cart cartstyle"></i>
                        </div>
                    </div>
                    <div>
                        <div className="infoproduct">
                            <img src="shopimg/tshirtblack.jpg" alt=""/>	
                            <h5>Lorem ipsum </h5>	
                            <h4>Rs. 1200</h4>
                            <i className="fa fa-heart-o heartstyle"></i>
                            <i className="fa fa-shopping-cart cartstyle"></i>
                        </div>
                    </div>
                    <div>
                        <div className="infoproduct">
                            <img src="shopimg/tshirtgreen.jpg" alt=""/>	
                            <h5>Lorem ipsum </h5>	
                            <h4>Rs. 1200</h4>
                            <i className="fa fa-heart-o heartstyle"></i>
                            <i className="fa fa-shopping-cart cartstyle"></i>
                        </div>
                    </div>
                    <div>
                        <div className="infoproduct">
                            <img src="shopimg/tshirtyellow.jpg" alt=""/>	
                                <h5>Lorem ipsum </h5>	
                            <h4>Rs. 1200</h4>
                            <i className="fa fa-heart-o heartstyle"></i>
                            <i className="fa fa-shopping-cart cartstyle"></i>
                        </div>
                    </div>
                    <div>
                        <div className="infoproduct">
                            <img src="shopimg/tshirtblack.jpg" alt=""/>	
                            <h5>Lorem ipsum </h5>	
                            <h4>Rs. 1200</h4>
                            <i className="fa fa-heart-o heartstyle"></i>
                            <i className="fa fa-shopping-cart cartstyle"></i>
                        </div>
                    </div>
                    <div>
                        <div className="infoproduct">
                            <img src="shopimg/tshirtgreen.jpg" alt=""/>	
                            <h5>Lorem ipsum </h5>	
                            <h4>Rs. 1200</h4>
                            <i className="fa fa-heart-o heartstyle"></i>
                            <i className="fa fa-shopping-cart cartstyle"></i>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default TodayDeal;