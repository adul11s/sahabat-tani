import React from "react";

import "../style/top_product.css";
const TopProduct = (props) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div class="card ukuran ">
            <img
              src={require("../images/sahabat-tani.png")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <span>
                {" "}
                ratings <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </span>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div class="card ukuran">
            <img
              src={require("../images/sahabat-tani.png")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <span>
                {" "}
                ratings <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </span>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div class="card ukuran">
            <img
              src={require("../images/sahabat-tani.png")}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <span>
                {" "}
                ratings <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </span>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopProduct;
