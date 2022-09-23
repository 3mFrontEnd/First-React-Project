import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Landing from "./component/Landing";
import Footer from "./component/Footer";
import Products from "./component/Products";

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
export default App;
