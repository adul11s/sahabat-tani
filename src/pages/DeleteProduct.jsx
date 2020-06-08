import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { delProduct, changeInputProduct } from "../store/actions/productAction";
import Footer from "../components/Footer";
import "../style/signin.css";
class DeleteProduct extends Component {
  delProd = async () => {
    await this.props.delProduct();
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
                    <label for="exampleInputEmail1">ID Product</label>
                    <input
                      type="text"
                      name="id"
                      placeholder="id"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>

                  <button
                    class="btn btn-primary rounded-pill w-100 mb-3"
                    onClick={() => this.delProd()}
                  >
                    Delete Product?
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
  delProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct);
