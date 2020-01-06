/////////////////routing all child components/////////////////////
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import SignUp from './SignUp/';
import Show from './Show';
import Collection from './Collections';
import Shop from './Shop';
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
            </Switch>
        </Router>
    );
  }
  
  export default App;