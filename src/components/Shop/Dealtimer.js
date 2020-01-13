import React, { Component } from 'react';
import Timer from 'react-compound-timer';
class DealTimer extends Component {
    render(){
        return(
            <>
                <div className="dealtimer row">
                    <div className="dealover"><h4>Deal Over in</h4></div>
                    <div className="dealover2" id="countdown">
                    {/* <div id="tiles"><span>01</span><span>23</span><span>55</span><span>26</span></div>
                        <div className="labels">
                            <li>Days</li>
                            <li>Hours</li>
                            <li>Mins</li>
                            <li>Secs</li>
                        </div>*/}
                        <Timer
                        initialTime={6000000}
                        direction="backward"
                    >
                        {() => (
                            <React.Fragment>
                                <div id="tiles">
                                    <span><Timer.Days /></span>
                                    <span><Timer.Hours /></span>
                                    <span><Timer.Minutes /></span>
                                    <span><Timer.Seconds /></span>
                                </div>
                                <div className="labels">
                                    <li>Days</li>
                                    <li>Hours</li>
                                    <li>Mins</li>
                                    <li>Secs</li>
                                </div>
                            </React.Fragment>
                        )}
                    </Timer>
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