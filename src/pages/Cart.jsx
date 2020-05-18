import React, { Component } from "react";

import "../style/category_detail.css";
import Navbar from "../components/Navbar";
import { getTransaction } from "../store/actions/transactionAction";
import { changeInputProduct } from "../store/actions/productAction";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import CartContent from "../components/CartContent";

class Cart extends Component {
  componentDidMount = async () => {
    await this.props.getTransaction();
  };
  render() {
    const cart = this.props.transaction.cart;
    console.log("cek cart masuk engga", cart);
    return (
      <div>
        {localStorage.getItem("isLogin") ? (
          <React.Fragment>
            <Navbar />
            <CartContent cart={cart} {...this.props} />
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
    isLogin: state.login,
    transaction: state.transaction,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputProduct(el),
  getTransaction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
