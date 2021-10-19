import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
   const [singleItem, setSingleItem] = useState([]);
   const { serviceId } = useParams();
   console.log(singleItem);
   useEffect(() => {
      fetch("https://bakhtiarabid.github.io/serviceapi/services.json")
         .then((res) => res.json())
         .then((data) => setSingleItem(data));
   }, []);

   const exactItem = singleItem.filter((item) => item._id !== serviceId);
   //    const { serviceId } = useParams();
   console.log(exactItem);
   return (
      <div>
         {" "}
         <h1> name: {exactItem?.name} </h1>
         <p>
            <img src={exactItem?.img} alt="" />
         </p>
      </div>
   );
};

export default ServiceDetail;
