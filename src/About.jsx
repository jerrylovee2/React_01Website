import React from "react";
// import { NavLink } from "react-router-dom";
import about from "../src/images/about.avif";
import Comman from "./Comman";
const About=()=>{
    return (
        <>
        <Comman
        name="Welcome to about page"
        imgsrc={about}
        visit='/Contact'
        btname="Contact Now"
        text="My Name is Nitish Ahir Im passionate about software development
        and Im looking forward to getting to work on new projects in the near future"
        />
         </>
    );
};

export default About;