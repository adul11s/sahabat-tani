import React, { Component } from "react";
import { getTopProduct } from "../store/actions/categoriesAction";
import Navbar from "../components/Navbar";
import { doLogout } from "../store/actions/loginAction";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import TopProduct from "../components/TopProduct";
import Footer from "../components/Footer";
import "../style/pages.css";

class Home extends Component {
  componentDidMount = async () => {
    await this.props.getTopProduct();
    // const paramCategory = await this.props.match.params.top_product;
    this.props.getTopProduct();
  };
  render() {
    return (
      <div>
        {localStorage.getItem("isLogin") ? (
          <React.Fragment>
            <Navbar />
            <div className="bg-index">
              <Carousel />
              <TopProduct {...this.props} />
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
    logout: state.login.isLogin,
    data: state.categories,
  };
};

const mapDispatchToProps = {
  doLogout,
  getTopProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
