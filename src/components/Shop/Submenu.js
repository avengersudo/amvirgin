import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class SubMenu extends Component {
    render(){
        return(
            <div className="longmenu specific6 shopSubmenu">
				<nav>
					<ul className="menu">
						<li><Link to="!#">New Arrivals</Link></li>
						<li><Link to="!#">AmVirgin</Link></li>
						<li>
							<label htmlFor="drop-1" className="toggle">Men +</label>
							<Link to="!#">Men</Link>
							<input type="checkbox" id="drop-1"/>
							<ul className="subone">
								<li>
									<ul className="subtwo">
										<h6>Footwears</h6>
										<li><Link to="!#">Causal Shoes</Link></li>
										<li><Link to="!#">Slippers</Link></li>
										<li><Link to="!#">Flipflops</Link></li>
										<li><Link to="!#">Loafers</Link></li>
									</ul>
								</li>
								<li>
									<ul className="subtwo">
										<h6>Clothing</h6>
										<li><Link to="!#">Western</Link></li>
										<li><Link to="!#">Ethnic</Link></li>
										<li><Link to="!#">Ties & Socks</Link></li>
										<li><Link to="!#">Gymwear</Link></li>
									</ul>
								</li>
								<li>
									<ul className="subtwo">
										<h6>Bottomwear</h6>
										<li><Link to="!#">Jeans</Link></li>
										<li><Link to="!#">Trousers</Link></li>
										<li><Link to="!#">Shorts & 3/4th</Link></li>
										<li><Link to="!#">Track Pants</Link></li>
									</ul>
								</li>
								<li>
									<ul className="subtwo">
										<h6>Topwear</h6>
										<li><Link to="!#">Shirt</Link></li>
										<li><Link to="!#">Tshirt</Link></li>
										<li><Link to="!#">Kurtas</Link></li>
										<li><Link to="!#">Suits & Blazers</Link></li>
									</ul>
								</li>
								<li>
									<ul className="subtwo">
										<h6>Personal Care</h6>
										<li><Link to="!#">Trimmers</Link></li>
										<li><Link to="!#">Shavers</Link></li>
										<li><Link to="!#">Grooming Kits</Link></li>
										<li><Link to="!#">Sunglasses</Link></li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<label htmlFor="drop-2" className="toggle">Women +</label>
							<Link to="#">Women</Link>
							<input type="checkbox" id="drop-2"/>
							<ul className="subone">
								<li>
									<ul className="subtwo">
										<h6>Clothing</h6>
										<li><Link to="!#">Sarees</Link></li>
										<li><Link to="!#">Kurtas & Kurties</Link></li>
										<li><Link to="!#">Dresses</Link></li>
										<li><Link to="!#">Coat & Blazers</Link></li>
									</ul>
								</li>
								<li>
									<ul className="subtwo">
										<h6>Footwears</h6>
										<li><Link to="!#">Heels</Link></li>
										<li><Link to="!#">Flats</Link></li>
										<li><Link to="!#">Boots</Link></li>
										<li><Link to="!#">Wedges</Link></li>
									</ul>
								</li>
								<li>
									<ul className="subtwo">
										<h6>Bottomwear</h6>
										<li><Link to="!#">Jeans</Link></li>
										<li><Link to="!#">Trousers</Link></li>
										<li><Link to="!#">Shorts & 3/4th</Link></li>
										<li><Link to="!#">Skirts</Link></li>
									</ul>
								</li>
								<li>
									<ul className="subtwo">
										<h6>Topwear</h6>
										<li><Link to="!#">Sweatshirts</Link></li>
										<li><Link to="!#">Pullovers</Link></li>
										<li><Link to="!#">Cardigans</Link></li>
										<li><Link to="!#">Shirts</Link></li>
									</ul>
								</li>
								<li>
									<ul className="subtwo">
										<h6>Beauty & Grooming</h6>
										<li><Link to="!#">Haircare</Link></li>
										<li><Link to="!#">Skincare</Link></li>
										<li><Link to="!#">Makeup</Link></li>
										<li><Link to="!#">Bath & Spa</Link></li>
									</ul>
								</li>
							</ul>
						
						</li>
						<li><Link to="#">Home & Decor</Link></li>
						<li><Link to="#">Kitchen & Appliances</Link></li>
						<li><Link to="#">Electronics</Link></li>
						<li><Link to="#">Accessories & More</Link></li>
					</ul>
				</nav>
			</div>
        )
    }
}
export default SubMenu;