import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Collection extends Component {
    render(){
        return(
            <>
            <Header />
            <div className="videocollection container">
                <h6> Popular Movies </h6>
                    <div className="row">
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster11.jpg" alt="" />
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                        </div>	
                            <div className="infomovie">
                                <h3>Title 1</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster1.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 2</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster3.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 3</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster4.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 4</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster5.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 5</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster6.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 6</h3>
                                <h5>Movies</h5>
                            </div> 	
                    </div>
                    </div>
                <hr />
                <div className="row">
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster7.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 7</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster8.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 8</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster9.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 9</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster10.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 10</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster11.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 11</h3>
                                <h5>Movies</h5>
                            </div> 	
                        
                        </div>
                        
                        <div className="col-md-2 videomob">
                        <div className="collection container2">
                            <img className="image" src="img/poster12.jpg" alt=""/>
                            <div className="middle">
                                <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                            </div>
                            </div>
                            <div className="infomovie">
                                <h3>Title 12</h3>
                                <h5>Movies</h5>
                            </div>
                        </div>
                    </div>
                <hr />
                </div>
                <Footer />
                </>
        );
    }
}
export default Collection;