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
        return(
            <div className="container section2">
                <div className="row titlesec">
                    <div className="col-md-10 col6"><h4 className="underline">Just Added</h4></div>
                    <div className="col-md-2 col6"><Link className="seeallbtn" to="/collection">See All</Link></div>
                </div>
                <div className="slider22">
                    <Slider {...settings}>
                        <div>
                            <div className="container1">
                                <img src="img/poster8.jpg" className="image" alt="" />	
                                <div className="middle">
                                    <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                </div> 
                            </div>	
                            <div className="infomovie">
                                <h3>Black Panther</h3>
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
                            <div className="infomovie">
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
                            <div className="infomovie">
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
                            <div className="infomovie">
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
                            <div className="infomovie">
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
                        <div className="infomovie">
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
                            <div className="infomovie">
                                <h3>Terminator</h3>
                                <h5>Movies</h5>
                            </div>
                        </div>
                    </Slider>
                </div>
                        <hr />
                    </div>
                    
        );
}

export default JustAdded;