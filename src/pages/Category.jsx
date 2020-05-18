import React, { Component } from "react";
import { doLogout } from "../store/actions/loginAction";
import "../style/category_detail.css";
import Navbar from "../components/Navbar";
import { getProduct } from "../store/actions/categoriesAction";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import CategoryDetail from "../components/CategoryDetail";

class Category extends Component {
  componentDidMount = async () => {
    await this.props.getProduct();
    const paramCategory = await this.props.match.params.category;
    this.props.getProduct(paramCategory);
    console.log("cek mounted data yaaaaaaaaaaaaaaaaaaaa", this.props.data);
  };
  render() {
    console.log("cek aja", this.props.data);
    return (
      <div>
        {localStorage.getItem("isLogin") ? (
          <React.Fragment>
            <Navbar />

            <CategoryBar />
            <div className="bg-category row ">
              <CategoryDetail {...this.props} />
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
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
