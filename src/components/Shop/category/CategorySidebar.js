import React, { Component } from 'react';
import $ from 'jquery';
import CategorySearch from './CategorySearch';
import ShopByCategories from './ShopByCategories';
import Refine from './Refine';
import ShopByColor from './ShopByColor';
import ShopByPrice from './ShopByPrice';
import ShopBySize from './ShopBySize';
class CategorySidebar extends Component {
    render(){
        // var name = "#floatMenu";
        // var menuYloc = null;  
        // menuYloc = 0
        // $(window).scroll(function () {
        //     var offset = menuYloc + $(document).scrollTop() + "px";
        //     $(name).animate({ top: offset }, { duration: 100, queue: false });
        // });
        return(
            <div className="col-lg-3">
                <div className="sidebar" id="floatMenu">
                    <div className="sidebar__inner">
                    <div className="wrapper">
                        <div className="sidebar-wrapper sticker">
                            <CategorySearch />
                            <ShopByCategories />
                            <Refine />
                            <ShopByColor />
                            <ShopByPrice />
                            <ShopBySize />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}
export default CategorySidebar;