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
        return(
            <div className="container section2">
                <div className="row">
                    <div className="col-md-3"><h1 className="trendhead"><span className="trd">Trending</span><span> Now</span></h1></div>
                        <div className="slidertrending col-md-9">
                            <Slider {...settings}>
                                <div>
                                    <div className="container1">
                                        <img src="img/main1.jpg" className="image" alt="" />	
                                        <div className="middle">
                                            <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                        </div> 
                                    </div>	
                                    <div className="infomovie trend">
                                        <h3>The Verdict</h3>
                                        <h5>Movies</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="container1">
                                        <img src="img/poster9.jpg" className="image"  alt=""/>	
                                        <div className="middle">
                                            <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                        </div> 
                                    </div>
                                    <div className="infomovie trend">
                                        <h3>Thor</h3>
                                        <h5>Movies</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="container1">
                                        <img src="img/poster10.jpg" className="image" alt=""/>
                                        <div className="rentmovie">
                                            <h5>Price ₹10 </h5>
                                        </div>
                                        <div className="middle">
                                            <div className="imgslider">
                                                <img src="img/play.png" alt="play"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="infomovie trend">
                                        <h3>Alita</h3>
                                        <h5>Movies</h5>
                                    </div>  	
                                </div>
                                <div>
                                    <div className="container1">
                                        <img src="img/poster11.jpg" className="image" alt=""/>
                                        <div className="rentmovie">
                                            <h5>Price ₹10 </h5>
                                        </div>
                                        <div className="middle">
                                            <div className="imgslider">
                                                <img src="img/play.png" alt="play" />
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="infomovie trend">
                                        <h3>Antman</h3>
                                        <h5>Movies</h5>
                                    </div>    
                                </div>
                                <div>
                                    <div className="container1">
                                        <img src="img/poster12.jpg" className="image" alt="" />	 
                                        <div className="middle">
                                            <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                        </div>
                                    </div>
                                    <div className="infomovie trend">
                                        <h3>Justice League</h3>
                                        <h5>Movies</h5>
                                    </div>    
                                </div>
                                <div>
                                    <div className="container1">
                                        <img src="img/poster13.jpg" className="image" alt="" />
                                        <div className="rentmovie">
                                            <h5>Price ₹10 </h5>
                                        </div>  
                                        <div className="middle">
                                            <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                        </div> 	
                                </div>
                                <div className="infomovie trend">
                                        <h3>World War Z</h3>
                                        <h5>Movies</h5>
                                        </div>	
                                </div>
                                <div>
                                    <div className="container1">
                                        <img src="img/poster1.jpg" className="image" alt=""/>
                                        <div className="middle">
                                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                        </div>
                                    </div>
                                    <div className="infomovie trend">
                                        <h3>Terminator</h3>
                                        <h5>Movies</h5>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    <hr />
                </div>
            </div>

        );
}

export default Trending;