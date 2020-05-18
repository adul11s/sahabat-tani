import React from "react";
import "../style/category_detail.css";
const DetailProduct = (props) => {
  console.warn("cek props produk detail", props);
  return (
    <div className="p-5">
      {props.data.data.map((el) => (
        <div class="card p-3 ">
          <img
            src={el.image}
            class="card-img-top gambar-detail d-flex justify-content-center"
            alt="..."
          />
          <div class="card-body text-center">
            <h5>{el.product_name}</h5>
            <span>
              {" "}
              ratings <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </span>
            <table className="text-left">
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
            <button
              type="button"
              class="btn btn-info float-right"
              onClick={() => props.postTransaction(el.id, 1, 1, 1)}
            >
              Add To Chart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DetailProduct;
