import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const JustAdded = props =>  {
        let settings = {
            dots: props.dots,
            arrows: props.arrows,
            infinite: props.infinite,
            speed: props.speed,
            slidesToShow: props.slidesToShow,
            slidesToScroll: props.slidesToScroll
          };
          let justAddedData = props.justAddedData;
        return(
            <div className="container section2">
                <div className="row titlesec">
                    <div className="col-md-10 col6"><h4 className="underline">Just Added</h4></div>
                    <div className="col-md-2 col6"><Link className="seeallbtn" to="/collection">See All</Link></div>
                </div>
                <div className="slider22">
                    <Slider {...settings}>
                        { justAddedData.map((jad,i) => {
                            return(
                                <div key={i}>
                                    <div className="container1">
                                        <img src={jad.poster} className="image" alt="" />	
                                        <div className="middle">
                                            <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                        </div> 
                                    </div>	
                                    <div className="infomovie">
                                        <h3>{jad.title}</h3>
                                        <h5>{jad.type}</h5>
                                    </div>
                                </div>
                            )
                        })
                        }
                        
                    </Slider>
                </div>
                        <hr />
                    </div>
                    
        );
}

export default JustAdded;