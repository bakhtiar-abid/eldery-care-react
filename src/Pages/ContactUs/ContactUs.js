import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
   return (
      <div className="row">
         <div className="col-lg-5 p-5">
            <input
               type="text"
               className="form-control  w-50"
               id="inputEmail3"
               required
               placeholder="Your Name"
            />
            <br /> <br />
            <input
               type="email"
               className="form-control  w-50"
               id="inputEmail3"
               required
               placeholder="Your Email"
            />
            <br /> <br />
            <input
               type="text"
               className="form-control  w-50"
               id="inputEmail3"
               required
               placeholder="phone"
            />
            <br /> <br />
            <textarea
               id="w3review"
               name="w3review"
               rows="4"
               cols="50"
               placeholder="Your Message"
            ></textarea>
            <br />
            <button className="btn btn-primary">Submit</button>
         </div>
         <div className="col-lg-7 contact-us "></div>
      </div>
   );
};

export default ContactUs;
