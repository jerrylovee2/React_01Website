import React from "react";
import { NavLink } from "react-router-dom";
// import web from "../src/images/img.jpg";
const Comman=(props)=>{
    return (
        <>
         <br></br>
        <br></br>

        <section id="header" className="head">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          <h1>{props.name} <strong className="brand-name">Infinity</strong> </h1>
                        <h3 className="my-3"> 
                           {props.text} 
                         </h3>
                        <div className="mt-3">
                           <NavLink className="btn btn-primary" to={props.visit}>{props.btname}</NavLink>
                        </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc}  className="img-fluid animated" alt="home_img"></img>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
    );
};

export default Comman;