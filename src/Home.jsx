import React from "react";
import web from "../src/images/img.jpg";
// import { NavLink } from "react-router-dom";
import Comman from "./Comman";
const Home=()=>{
    return (
        <>
         <Comman
        name="Grow you Bussiness with"
        imgsrc={web}
        visit='/Service'
        btname="Get Started"
       />
       </>
    );
};

export default Home;