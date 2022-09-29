import React, {Component} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Landing from "./component/Landing";
import Footer from "./component/Footer";
import Products from "./component/Products";

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    )
  }
}
export default App;
