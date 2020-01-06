import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Header from '../Header';
import Footer from '../Footer';
import './style.css';
import Trending from '../Home/Trending';
import Slider from "react-slick";
import ReadMoreReact from 'read-more-react';

class Show extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        this.episodeCredit = this.episodeCredit.bind(this);
    }
    episodeCredit = () =>{
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
          }));
    }
    render(){
        var settings = {
            dots: false,
            arrows: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5.5,
            slidesToScroll: 1
          };
        return(
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Amvirgin | Show</title>
                </Helmet>
                <Header />
                <div className="bodysection">
                    <div className="videomainsection container">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <img src="img/main1.jpg" alt="play" className="videoimage" />
                                </div>
                                <button className="watchlist"><i className="fa fa-bars"></i>Watchlist</button>
                                <button className="watchlist"><i className="fa fa-share"></i>Share</button>
                            </div>
                            <div className="col-md-6">
                                <div className="imgslider">
                                    <div className="col-md-8">
                                        <h3>The Verdict</h3>
                                        <h6 className="videoinfo">Movies | 1h 53m 49s | Drama Romance | U/A | Hindi</h6>
                                        <button className="trailerbtn">
                                            <img src="img/playred.png" alt="play" className="play" />Trailer
                                        </button>
                                        <button className="playbtn">
                                            <img src="img/playwhite.png" alt="play" className="play" />Play
                                        </button>
                                    </div>
                                    <hr className="videohr" />
                                    <div className="details row">
                                        <ReadMoreReact text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum." readMoreText="Read More" />
                                    </div>
                                </div>
                            </div>
                        </div>	
                    </div>
                    <div className="container episodesection section2">
                        <div className="tab">
                            <button className={!this.state.isOpen ? 'tablinks episodebtn active' : 'tablinks episodebtn'} onClick={this.episodeCredit} id="defaultOpen">
                                <h5 className="">Episodes</h5>
                            </button>
                            <button className={this.state.isOpen ? 'tablinks episodebtn active' : 'tablinks episodebtn'} onClick={this.episodeCredit}>
                                <h5 className="">Credits</h5>
                            </button>
                        </div>
                        {!this.state.isOpen && 
                            <div id="episode" className="tabcontent container">
                            <div className="sliderepisode">
                                <Slider {...settings}>
                                    <div>
                                        <div className="container1">
                                            <img src="img/main1.jpg" className="image" alt="" />	
                                            <div className="middle">
                                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                            </div> 
                                        </div>	
                                        <div className="infomovie">
                                            <h3>Episode 1</h3>
                                            <h5>30 min</h5>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="container1">
                                        <img src="img/main1.jpg" className="image" alt="" />	
                                        <div className="middle">
                                            <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                        </div> 
                                        </div>	
                                        <div className="infomovie">
                                            <h3>Episode 2</h3>
                                            <h5>30 min</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="container1">
                                            <img src="img/poster3.jpg" className="image" alt=""/>
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
                                            <img src="img/poster4.jpg" className="image" alt=""/>
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
                                            <img src="img/poster5.jpg" className="image" alt="" />	 
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
                                            <img src="img/poster6.jpg" className="image" alt="" />
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
                                            <img src="img/poster13.jpg" className="image" alt=""/>
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
                        </div>
                        }
                        
                        {this.state.isOpen && 
                            <div id="credit" className="tabcontent credits">
                                <p>Actors: Mona Singh, Sakshi Tanwar, Nidhi Singh, Palomi Ghosh, Ashish Vidyarthy, Mohan Joshi </p>
                                <p>Director: Vinay Waikul</p>
                                <p>Duration: 2 hours 26 mins </p>
                            </div>
                        }
                        
                    </div>
                    <Trending />
                </div>
                <Footer />
            </>
        );
    }
}

export default Show;