import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import {GetData} from '../../db.js';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
class Sliders extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     sliders: [],
        // }
    }
    // componentDidMount(){
    //     GetData('sliders').then(res=>{
    //         if(res.status===200){
    //             this.setState({sliders: res.data.data});
    //           }else{
    //             this.setState({sliders: ''});
    //           }
    //     })
    // }
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
                <div className="section1 specific">
                    {this.props.slidersData &&
                        <Slider {...settings}>
                        {
                            this.props.slidersData.map((slider,i) => {
                                return(
                                    <div className="containerimage" key={slider.id} >
                                        <img src={slider.poster} alt="" />
                                        <div className="top-left">
                                            <h2 className="titlemovie" style={{WebkitBoxOrient: 'vertical'}}> {slider.title} </h2>
                                            <h3 className="description">{slider.description}</h3>
                                            <div className="">
                                                <Link to="show"><button className="seeallbtn1" id={slider.id}>Subscribe</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </Slider> 
                    }
                    {!this.props.slidersData &&
                        <div style={{margin: '75px'}}></div>
                    }
                </div>
        );
    }
}

export default Sliders;