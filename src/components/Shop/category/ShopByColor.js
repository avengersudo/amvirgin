import React, { Component } from 'react';

class ShopByColor extends Component {
    render(){
        return(
            <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
                <h4 className="sidebar-title">Colour </h4>
                <div className="sidebar-widget-list mt-20">
                <ul>
                    <li>
                    <div className="sidebar-widget-list-left">
                        <input type="checkbox" defaultValue /> <a href="#">Green <span>7</span> </a>
                        <span className="checkmark" />
                    </div>
                    </li>
                    <li>
                    <div className="sidebar-widget-list-left">
                        <input type="checkbox" defaultValue /> <a href="#">Cream <span>8</span> </a>
                        <span className="checkmark" />
                    </div>
                    </li>
                    <li>
                    <div className="sidebar-widget-list-left">
                        <input type="checkbox" defaultValue /> <a href="#">Blue <span>9</span> </a>
                        <span className="checkmark" />
                    </div>
                    </li>
                    <li>
                    <div className="sidebar-widget-list-left">
                        <input type="checkbox" defaultValue /> <a href="#">Black <span>3</span> </a>
                        <span className="checkmark" />
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}
export default ShopByColor;