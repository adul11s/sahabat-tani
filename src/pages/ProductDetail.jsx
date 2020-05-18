import React, { Component } from "react";
import { doLogout } from "../store/actions/loginAction";
import "../style/category_detail.css";
import Navbar from "../components/Navbar";
import { getProduct, getProductId } from "../store/actions/categoriesAction";
import { postTransaction } from "../store/actions/transactionAction";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import DetailProduct from "../components/DetailProduct";

class ProductDetail extends Component {
  componentDidMount = async () => {
    await this.props.getProduct();
    const paramCategory = await this.props.match.params.id;
    this.props.getProductId(paramCategory);
  };

  render() {
    console.log("cek aja props detail product", this.props);
    return (
      <div>
        {localStorage.getItem("isLogin") ? (
          <React.Fragment>
            <Navbar />
            <div className="bg-category">
              <DetailProduct postTrans={this.postTransaction} {...this.props} />
            </div>
            <Footer />
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { message: "login ulang" },
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.login,
    dataUser: state.login,
    logout: state.login.isLogin,
    data: state.categories,
  };
};

const mapDispatchToProps = {
  doLogout,
  getProduct,
  getProductId,
  postTransaction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
