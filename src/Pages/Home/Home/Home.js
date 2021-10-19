import React from "react";
import Volunteer from "../../Volunteers/Volunteer";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Services></Services>
         <Volunteer></Volunteer>
      </div>
   );
};

export default Home;
