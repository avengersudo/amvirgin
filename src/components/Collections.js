import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {GetData} from '../db.js';

class Collection extends Component {
    constructor(props){
        super(props);
        this.state = {
            collection:[]
        }
    }
    componentDidMount(){
        //Get data for Top sliders
        GetData('popular').then(res=>{
            if(res.status===200){
                console.log(res.data.data);
                this.setState({collection: res.data.data});
              }else{
                this.setState({collection: ''});
              }
        })
    }
    render(){
        let collection = this.state.collection;
        return(
            <>
            <Header />
            <div className="videocollection container">
                <h6> Popular Movies </h6>
                    <div className="row">
                        {collection.length > 0 ? collection.map((coll,i) => {
                            return(
                                <div className="col-md-2 videomob">
                                    <div className="collection container2">
                                        <img className="image" src={coll.poster} alt="" />
                                        <div className="middle">
                                            <div className="imgslider"><img src="img/play.png" alt="play" /></div>
                                        </div>
                                    </div>	
                                    <div className="infomovie">
                                        <h3>{coll.title}</h3>
                                        <h5>{coll.type}</h5>
                                    </div>
                                </div>
                            )
                        })
                    : <span>There is no collection</span>}
                    </div>
                <hr />
                </div>
                <Footer />
                </>
        );
    }
}
export default Collection;