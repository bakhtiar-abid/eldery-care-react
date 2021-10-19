import React from "react";
import "./Banner.css";

const Banner = () => {
   return (
      <div id="home">
         <div className="hero-image">
            <div className="hero-text">
               <h1 style={{ fontSize: "30px" }}>Eldery Care</h1>
               <p style={{ fontSize: "40px" }}>
                  Leading care at the heart of our community.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Banner;
