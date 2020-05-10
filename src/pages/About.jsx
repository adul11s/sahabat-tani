import React, { Component } from "react";

import Navbar from "../components/Navbar";
import { doLogout } from "../store/actions/loginAction";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

import Carousel from "../components/Carousel";
import TopProduct from "../components/TopProduct";
import Footer from "../components/Footer";

class About extends Component {
  render() {
    return (
      <div>
        {this.props.dataUser.isLogin ? (
          <React.Fragment>
            <Navbar />
            <Carousel />
            <TopProduct />
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
  };
};

const mapDispatchToProps = {
  doLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
