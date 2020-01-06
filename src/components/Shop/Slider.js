import React, { Component } from 'react';
import './style.css';
import Slider from "react-slick";

class ShopSlider extends Component {
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
	        <div className="slidershop">
                <Slider {...settings}>
                    <div className="">
                        <img src="shopimg/sliderimg1.png" alt="" /> 
                    </div>
                    <div className="">
                        <img src="shopimg/sliderimg2.png" alt=""/>
                    </div>
                    <div className="">
                        <img src="shopimg/sliderimg3.png" alt=""/>	
                    </div>
                    <div className="">
                        <img src="shopimg/sliderimg2.png" alt=""/>	   
                    </div>
                    <div className="">
                        <img src="shopimg/sliderimg5.png" alt=""/>	   
                    </div>
                </Slider>
		    </div>
        );
    }
}
export default ShopSlider;
