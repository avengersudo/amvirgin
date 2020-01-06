import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import Header from '../Header';
import Footer from '../Footer';
import Sliders from './Slider';
import TopPics from './TopPics';
import Shop from './Shop';
import Trending from './Trending';
import JustAdded from './JustAdded';
import {GetData} from '../../db.js';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            sliders: [],
            trending: [],
        }
    }
    componentDidMount(){
        GetData('sliders').then(res=>{
            if(res.status===200){
                this.setState({sliders: res.data.data});
              }else{
                this.setState({sliders: ''});
              }
        })
        GetData('trending/picks').then(res=>{
            if(res.status===200){
                this.setState({trending: res.data.data});
              }else{
                this.setState({trending: ''});
              }
        })
    }
    render(){
        //console.log(this.props);
        return(
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Amvirgin | Home</title>
                </Helmet>
                <Header />
                    <div className="bodysection">
                        <Sliders 
                            dots={true} 
                            arrows={false} 
                            infinite={false} 
                            speed={500} 
                            slidesToShow={1} 
                            slidesToScroll={1}
                            slidersData={this.state.sliders}
                        />
                        <TopPics 
                            dots={false} 
                            arrows={true} 
                            infinite={false} 
                            speed={500} 
                            slidesToShow={5.5} 
                            slidesToScroll={1} 
                        />
                        <Shop
                            dots={false} 
                            arrows={true} 
                            infinite={false} 
                            speed={500} 
                            slidesToShow={5.5} 
                            slidesToScroll={1} 
                        />
                        <JustAdded 
                            dots={false} 
                            arrows={true} 
                            infinite={false} 
                            speed={500} 
                            slidesToShow={5.5} 
                            slidesToScroll={1} 
                        />
                        <Trending 
                            dots={false} 
                            arrows={true} 
                            infinite={false} 
                            speed={500} 
                            slidesToShow={2.2} 
                            slidesToScroll={1} 
                        />
                    </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

// const mapDispatchToProps = (dispatch) => {
    
// }
export default connect(mapStateToProps )(Home);