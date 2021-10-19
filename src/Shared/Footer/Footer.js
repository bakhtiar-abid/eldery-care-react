import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <div>
         <footer
            className="container-fluid "
            style={{ backgroundColor: "#232f3e", padding: "100px" }}
         >
            <div className="container overflow-hidden">
               <div className="row gx-5 footer-info">
                  <div className="col-lg-4 col-md-5 col-sm-5">
                     <div className="p-3 footer-info">
                        <ul>
                           <h6 className="text-white">Get To Know Us</h6>
                           <li>
                              <a href="">Careers</a>
                           </li>
                           <li>
                              <a href="">Blog</a>
                           </li>
                           <li>
                              <a href="">About ElderyCare</a>
                           </li>
                           <li>
                              <a href="">Investor Relations</a>
                           </li>
                           <li>
                              <a href="">Eldery Care Business</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-5 ">
                     <div className="p-3 footer-info">
                        <ul>
                           <h6 className="text-white">Get Connect with Us</h6>
                           <li>
                              <a href="">Services on ElderyCare</a>
                           </li>
                           <li>
                              <a href="">Sell on ElderyCare Business</a>
                           </li>
                           <li>
                              <a href="">Become an Affiliate</a>
                           </li>
                           <li>
                              <a href="">Come At US</a>
                           </li>
                           <li>
                              <a href="">Self-Publish with Us</a>
                           </li>
                           <li>
                              <a href="">Host an ElderyCare Hub</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-5">
                     <div className="p-3 footer-info">
                        <ul>
                           <h6 className="text-white">
                              ElderyCare Payment On Service
                           </h6>
                           <li>
                              <a href="">ElderyCare Business Card</a>
                           </li>
                           <li>
                              <a href="">ElderyCare Points</a>
                           </li>
                           <li>
                              <a href="">Reload with us</a>
                           </li>
                           <li>
                              <a href="">ElderyCare Currency Converter</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="text-center text-white">
               <small>Ⓒ 2023 ElderyCare</small>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
