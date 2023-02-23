import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch,Route, BrowserRouter, Redirect } from "react-router-dom";

const App=()=>{
    return (
        <>
        
       <BrowserRouter>
       <Navbar/>
        <Switch> 
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service"component={Service}/>  
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/" />
        </Switch>
        </BrowserRouter>
 
        <Footer/>
        </>
        
    );
};

export default App;