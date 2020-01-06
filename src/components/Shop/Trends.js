import React, { Component } from 'react';

class Trends extends Component {
    render(){
        return(
            <div className="trends">
                <h4>Trending Now </h4>
                <div className="row">
                <div className="col-md-3 "><div className="trs"><img className="trendimg" src="shopimg/img6.jpg" alt="" />
                <div className="centerword">
                <p className="set1">Winterwear</p>
                <p className="set2">Upto 30% off</p></div>
                </div>
                </div>
                <div className="col-md-3 "><div className="trs"><img className="trendimg" src="shopimg/jackets.jpg" alt="" />
                <div className="centerword">
                <p className="set1">Jackets</p>
                <p className="set2">Upto 50% off</p></div>
                </div>
                </div>
                <div className="col-md-3 "><div className="trs"><img className="trendimg" src="shopimg/camera.jpg" alt="" />
                <div className="centerword">
                <p className="set1">Electronics</p>
                <p className="set2">Upto 60% off</p></div>
                </div>
                </div>
                <div className="col-md-3 "><div className="trs"><img className="trendimg" src="shopimg/img2.jpg" alt="" />
                <div className="centerword">
                <p className="set1">Ethnic</p>
                <p className="set2">Upto 70% off</p></div>
                </div>
                </div>
                </div>
                </div>
        );
    }
}

export default Trends;