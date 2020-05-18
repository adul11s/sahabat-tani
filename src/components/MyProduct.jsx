import React from "react";

import "../style/top_product.css";
const MyProduct = (props) => {
  return (
    <div className="bg-profil">
      {props.data.data.map((el, index) => (
        <table className="text-left">
          <tr>
            <td>{index + 1}</td>
            <td>: {el.product_name}</td>
          </tr>
          <tr>
            <td>Product ID</td>
            <td>: {el.id}</td>
          </tr>
          <tr>
            <td>Sold </td>
            <td>: {el.sold}</td>
          </tr>
          <tr>
            <td> Stock</td>
            <td>: {el.stock}</td>
          </tr>
        </table>
      ))}
    </div>
  );
};
export default MyProduct;
