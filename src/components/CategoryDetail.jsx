import React from "react";
import { Link } from "react-router-dom";
import "../style/category_detail.css";
const CategoryDetail = ({
  image,
  product_name,
  price,
  color,
  weight,
  discount,
  sold,
  stock,
  id,
}) => {
  return (
    <div>
      <div class="card ukuran  p-0">
        <img src={image} className="card-img-top gambar" alt="..." />
        <div class="card-body text-left">
          <span>
            {" "}
            ratings <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </span>
          <table>
            <tr>
              <td>Name :</td>
              <td>{product_name}</td>
            </tr>
            <tr>
              <td>Price :</td>
              <td>{price}</td>
            </tr>
            <tr>
              <td>Color :</td>
              <td>{color}</td>
            </tr>
            <tr>
              <td>Weight :</td>
              <td>{weight}</td>
            </tr>
            <tr>
              <td>Discount :</td>
              <td>{discount}</td>
            </tr>
            <tr>
              <td>Sold :</td>
              <td>{sold}</td>
            </tr>
            <tr>
              <td> Stock :</td>
              <td>{stock}</td>
            </tr>
          </table>
          <Link to={"/productdetail/" + id}>
            <button type="button" className="btn btn-info float-right">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CategoryDetail;
