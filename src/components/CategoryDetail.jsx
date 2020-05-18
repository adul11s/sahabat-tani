import React from "react";
import { Link } from "react-router-dom";
import "../style/category_detail.css";
const CategoryDetail = (props) => {
  return (
    <div>
      {props.data.data.map((el) => (
        <div className=" col-md-3 ">
          <div class="card ukuran  p-0 my-3">
            <img src={el.image} className="card-img-top gambar" alt="..." />
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
                  <td>{el.product_name}</td>
                </tr>
                <tr>
                  <td>Price :</td>
                  <td>{el.price}</td>
                </tr>
                <tr>
                  <td>Color :</td>
                  <td>{el.color}</td>
                </tr>
                <tr>
                  <td>Weight :</td>
                  <td>{el.weight}</td>
                </tr>
                <tr>
                  <td>Discount :</td>
                  <td>{el.discount}</td>
                </tr>
                <tr>
                  <td>Sold :</td>
                  <td>{el.sold}</td>
                </tr>
                <tr>
                  <td> Stock :</td>
                  <td>{el.stock}</td>
                </tr>
              </table>
              <Link to={"/productdetail/" + el.id}>
                <button type="button" className="btn btn-info float-right">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CategoryDetail;
