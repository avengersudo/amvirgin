import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import SignUp from './SignUp/';
import Show from './Show';
import Collection from './Collections';
import Shop from './Shop';
import Category from './Shop/category';
import ProductDetail from './Shop/product-detail';
import Cart from './Shop/cart';
import News from './News';
import { createBrowserHistory } from "history";
function App(props) {
    const history = createBrowserHistory();
    return ( 
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={ Home }></Route>
                <Route exact path="/login" component={ SignUp }></Route>
                <Route exact path="/show" component={ Show }></Route>
                <Route exact path="/collection" component={ Collection }></Route>
                <Route exact path="/shop" component={ Shop }></Route>
                <Route exact path="/category" component={ Category }></Route>
                <Route exact path="/product-details" component={ ProductDetail }></Route>
                <Route exact path="/cart" component={ Cart }></Route>
                <Route exact path="/news" component={ News }></Route>
            </Switch>
        </Router>
    );
  }
  
  export default App;