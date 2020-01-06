import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Header from './Header';
import ShopSlider from './Slider';
import DealTimer from './Dealtimer';
import FocusBrand from './FocusBrand';
import TodayDeal from './TodayDeal';
import PopularStuff from './PopularStuff';
import Trends from './Trends';
import Footer from '../Footer';
import SubMenu from './Submenu';
import { Link } from 'react-router-dom';
import './style.css';
class Shop extends Component {
    render(){
        return(
            <div className="shopMain">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Amvirgin | Shop</title>
                </Helmet>
                <Header />
                <SubMenu />
                <div className="brandsection specific4 shopMiddle">
                    <ShopSlider 
                        dots={true} 
                        arrows={false} 
                        infinite={false} 
                        speed={500} 
                        slidesToShow={1} 
                        slidesToScroll={1} 
                    />
                    <DealTimer />
                    <div className="row secondmenu">
                        <Link to="">
                            <div className="image-container" data-caption="New Arrival">
                                <div className="zoomhidden">
                                    <img src="shopimg/img3.jpg" alt="New Arrival" />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="image-container" data-caption="Am Virgin">
                                <div className="zoomhidden">
                                    <img src="shopimg/tshirtblue.jpg" alt="Am Virgin" />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="image-container" data-caption="Men">
                                <div className="zoomhidden">
                                    <img src="shopimg/img8.jpg" alt="Men" />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="image-container" data-caption="Women">
                                <div className="zoomhidden">
                                    <img src="shopimg/img4.jpg" alt="Women" />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="image-container" data-caption="Home & Decor">
                                <div className="zoomhidden">
                                    <img src="shopimg/homedecor.jpg" alt="Home & Decor" />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="image-container" data-caption="Kitchen & Appliances">
                                <div className="zoomhidden">
                                    <img src="shopimg/kitchen.jpg" alt="Kitchen & Appliances" />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="image-container" data-caption="Electronics">
                                <div className="zoomhidden">
                                    <img src="shopimg/electronics.jpg" alt="Electronics" />
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="image-container" data-caption="Accessories & More">
                                <div className="zoomhidden">
                                    <img src="shopimg/accessories.jpg" alt="Accessories & More" />
                                </div>
                            </div>
                        </Link>
                        </div>
                    </div>
                <FocusBrand />
                <TodayDeal 
                    dots={true} 
                    arrows={true} 
                    infinite={false} 
                    speed={500} 
                    slidesToShow={6} 
                    slidesToScroll={1} />
                <PopularStuff />
                <Trends />
                <Footer />
            </div>
            
        );
    }
}
export default Shop;