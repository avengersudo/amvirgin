import React, { Component } from 'react';

class CategoryPagination extends Component {
    render(){
        return(
            <div className="paginationsection">
                <div className="pagination-style text-center">
                <ul>
                    <li><a className="prev" href="#"><i className="la la-angle-left" /></a></li>
                    <li><a href="#">01</a></li>
                    <li><a href="#">02</a></li>
                    <li><a className="active" href="#">03</a></li>
                    <li><a href="#">04</a></li>
                    <li><a href="#">05</a></li>
                    <li><a href="#">06</a></li>
                    <li><a className="next" href="#"><i className="la la-angle-right" /></a></li>
                </ul>
                </div>
            </div>
        );
    }
}
export default CategoryPagination;