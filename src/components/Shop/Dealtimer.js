import React, { Component } from 'react';

class DealTimer extends Component {
    render(){
        return(
            <>
                <div className="dealtimer row">
                    <div className="dealover"><h4>Deal Over in</h4></div>
                    <div className="dealover2" id="countdown">
                        <div id='tiles'></div>
                        <div className="labels">
                            <li>Days</li>
                            <li>Hours</li>
                            <li>Mins</li>
                            <li>Secs</li>
                        </div>
                    </div>
                    <div className="dealover3"><h4></h4></div>
                </div>
                <div className="movingstrip">
                    <marquee  direction="left">
                        <p>Last 15 minutes</p><p>Every Hour Deal</p>
                        <p>Last 15 minutes</p><p>Every Hour Deal</p>
                    </marquee>
                </div>
            </>
        );
    }
}

export default DealTimer;