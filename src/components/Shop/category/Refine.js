import React, { Component } from 'react';

class Refine extends Component {
    render(){
        return(
            <div className="sidebar-widget shop-sidebar-border pt-40 mt-40">
                <h4 className="sidebar-title">Refine By </h4>
                <div className="sidebar-widget-list mt-20">
                <ul>
                    <li>
                    <div className="sidebar-widget-list-left">
                        <input type="checkbox" /> <a href="#">On Sale <span>4</span> </a>
                        <span className="checkmark" />
                    </div>
                    </li>
                    <li>
                    <div className="sidebar-widget-list-left">
                        <input type="checkbox" /> <a href="#">New <span>5</span></a>
                        <span className="checkmark" />
                    </div>
                    </li>
                    <li>
                    <div className="sidebar-widget-list-left">
                        <input type="checkbox" defaultValue /> <a href="#">In Stock <span>6</span> </a>
                        <span className="checkmark" />
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}
export default Refine;