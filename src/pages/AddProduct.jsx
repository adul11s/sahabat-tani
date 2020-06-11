import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { addProduct, changeInputProduct } from "../store/actions/productAction";
import Footer from "../components/Footer";
import "../style/signin.css";
class AddProduct extends Component {
  addProd = async () => {
    await this.props.addProduct();
    this.props.history.push("/");
    const isLogin = this.props.isLogin;
    console.log(isLogin);
    if (isLogin) {
      this.props.history.push("/profile");
    }
  };

  render() {
    // const message = this.props.location.state
    //   ? this.props.location.state.message
    //   : "masukkan username dan password";
    return (
      <div>
        <React.Fragment>
          <Navbar {...this.props} />
          <div class="container-fluid py-4 bg-signin">
            <div class="row d-flex justify-content-center">
              <div class="col-5 border bg-card rounded">
                <form onSubmit={(el) => el.preventDefault()}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Category ID</label>
                    <input
                      type="number"
                      name="category_id"
                      placeholder="category_id"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Seller ID</label>
                    <input
                      type="number"
                      name="seller_id"
                      placeholder="seller_id"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Product Name</label>
                    <input
                      type="text"
                      name="product_name"
                      placeholder="Product Name"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Image</label>
                    <input
                      type="text"
                      name="image"
                      placeholder="image"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Color</label>
                    <input
                      type="text"
                      name="color"
                      placeholder="Color"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Weight</label>
                    <input
                      type="number"
                      name="weight"
                      placeholder="Weight"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Top Product</label>
                    <input
                      type="text"
                      name="top_product"
                      placeholder="Top Product"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Promo</label>
                    <input
                      type="text"
                      name="promo"
                      placeholder="Promo"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Discount</label>
                    <input
                      type="number"
                      name="discount"
                      placeholder="% Discount"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Sold</label>
                    <input
                      type="number"
                      name="sold"
                      placeholder="Sold"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Stock</label>
                    <input
                      type="number"
                      name="stock"
                      placeholder="Stock"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <button
                    class="btn btn-primary rounded-pill w-100 mb-3"
                    onClick={() => this.addProd()}
                  >
                    Add product
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.login,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputProduct(el),
  addProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
