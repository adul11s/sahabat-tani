import React from "react";
import { Link } from "react-router-dom";
import "../style/top_product.css";
const TopProduct = (props) => {
  return (
    <div className="row">
      {props.data.data.map((el) => (
        <div className="col-lg-3 col-md-6 col-sm-12 my-3 ">
          <div class="card ukuran d-flex justify-content-center">
            <img src={el.image} className="card-img-top gambar-top" alt="..." />
            <div class="card-body text-left">
              <span>
                {" "}
                ratings <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
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
                <button type="button" class="btn btn-info">
                  Seemore
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TopProduct;
