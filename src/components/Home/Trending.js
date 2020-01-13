import React from 'react';
import Slider from "react-slick";

const Trending = props => {
        var settings = {
            dots: props.dots,
            arrows: props.arrows,
            infinite: props.infinite,
            speed: props.speed,
            slidesToShow: props.slidesToShow,
            slidesToScroll: props.slidesToScroll
          };
          let trendingData = props.trendingData;
        return(
            <div className="container section2">
                <div className="row">
                    <div className="col-md-3"><h1 className="trendhead"><span className="trd">Trending</span><span> Now</span></h1></div>
                        <div className="slidertrending col-md-9">
                            <Slider {...settings}>
                                {trendingData.length > 0 ?  trendingData.map((trending,i) => {
                                    return(
                                        <div key={i}>
                                            <div className="container1">
                                                <img src={trending.poster} className="image" alt="" />	
                                                <div className="middle">
                                                    <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                                </div> 
                                            </div>	
                                            <div className="infomovie trend">
                                                <h3>{trending.title}</h3>
                                                <h5>{trending.type}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                                : <span>There are no videos available</span>
                                }
                                
                            </Slider>
                        </div>
                    <hr />
                </div>
            </div>

        );
}

export default Trending;