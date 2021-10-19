import React from "react";
import notFound from "../../../images/notfound.jpg";

const NotFound = () => {
   return (
      <div>
         <img src={notFound} className="img-fluid w-100" alt="" />
      </div>
   );
};

export default NotFound;
