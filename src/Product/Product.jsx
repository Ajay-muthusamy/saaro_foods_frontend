import React from "react";
import dryFruites from "../json/dryfruit.json";

const Product = () => {
  return (
    <section>
      <div>
        {/* {leave it} */}
      </div>
      <div>
        <div>
          {dryFruites.map((data) => (
            <div>
              <img src={data.img} alt="" />
              <h1>{data.title}</h1>
              <h1>{data.price}</h1>
              {!data.stock ? <span className="text-red-500">Out of stock</span> : <span></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
