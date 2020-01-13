import React,{ Component } from 'react';

class CustomerReview extends Component {
    render(){
        return(
            <div className="reviewsection row">
                <div className="ratingsection">
                <h3>Customer Reviews </h3>
                <h4> 4.5 out of 5 </h4>
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star-half-empty checked" />
                <p className="basedp">Based on 254 reviews.</p>
                <div className="review">
                    <div className="side">
                    <div>5 <span className="fa fa-star checked" /></div>
                    </div>
                    <div className="middlesection">
                    <div className="bar-container">
                        <div className="bar-5" />
                    </div>
                    </div>
                    <div className="side right">
                    <div>50%</div>
                    </div>
                    <div className="side">
                    <div>4 <span className="fa fa-star checked" /></div>
                    </div>
                    <div className="middlesection">
                    <div className="bar-container">
                        <div className="bar-4" />
                    </div>
                    </div>
                    <div className="side right">
                    <div>10%</div>
                    </div>
                    <div className="side">
                    <div>3 <span className="fa fa-star checked" /></div>
                    </div>
                    <div className="middlesection">
                    <div className="bar-container">
                        <div className="bar-3" />
                    </div>
                    </div>
                    <div className="side right">
                    <div>10%</div>
                    </div>
                    <div className="side">
                    <div>2 <span className="fa fa-star checked" /></div>
                    </div>
                    <div className="middlesection">
                    <div className="bar-container">
                        <div className="bar-2" />
                    </div>
                    </div>
                    <div className="side right">
                    <div>15%</div>
                    </div>
                    <div className="side">
                    <div>1 <span className="fa fa-star checked" /></div>
                    </div>
                    <div className="middlesection">
                    <div className="bar-container">
                        <div className="bar-1" />
                    </div>
                    </div>
                    <div className="side right">
                    <div>5%</div>
                    </div>
                </div>
                </div>
                <div className="reviews">
                <div className="reviewpart">
                    <p> <img className="img" src="img/user.png" /><span className="name">James Doe</span> <span className="star fa fa-star checked"> 5 </span></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <hr />
                <div className="reviewpart">
                    <p> <img className="img" src="img/user.png" /><span className="name">Tony Stark</span> <span className="star fa fa-star checked"> 5 </span></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                </div>
            </div>
            
        )
    }
}

export default CustomerReview;