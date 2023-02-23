import React, { useState } from "react";

const Contact=()=>{
    const [data,setData]=useState({
        name:'',
        phone:'',
        email:'',
        msg:'', 
    })
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            }  
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Your Name is ${data.name}.Your Number is ${data.phone}.Your Email is ${data.email}.Your Message is${data.msg}`);
    }

    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>

        </div>
        <div className="container contact_div">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" name="name"
                 value={data.name}
                 onChange={InputEvent}
                 placeholder="Enter you full name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" name="phone"
                 value={data.phone}
                 onChange={InputEvent}
                 placeholder="Mobile number"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                 <input type="text" class="form-control" id="exampleFormControlInput1" name="email"
                 value={data.email}
                 onChange={InputEvent}
                 placeholder="name@email.com"/>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control"  id="exampleFormControlTextarea1" rows="3"
            onChange={InputEvent}
            value={data.msg }
            name="msg"></textarea>
            </div>
            <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

                </form>
            </div>
        </div>
        </>
    );
};

export default Contact;