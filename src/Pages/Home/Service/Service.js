import React from "react";

const Service = ({ service }) => {
   const { img, name, desc } = service;
   return (
      <div className="service pb-3">
         <img className="img-fluid" src={img} alt="" />
         <h3>{name}</h3>
         <button className="btn btn-warning">Book {name.toLowerCase()}</button>
         <p className="px-3">{desc}</p>
      </div>
   );
};

{
   /* <Link to={`/booking/${id}`}>
   <button className="btn btn-warning">Book {name.toLowerCase()}</button>
</Link>; */
}
export default Service;
