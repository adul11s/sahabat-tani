import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import "../style/pages.css";
import { Link } from "react-router-dom";
import MyProduct from "../components/MyProduct";
import { getMyProduct, getTopProduct } from "../store/actions/categoriesAction";
const bio = JSON.parse(localStorage.getItem("bio"));
class Profile extends Component {
  componentDidMount = async () => {
    await this.props.getTopProduct();
    this.props.getMyProduct();
  };
  render() {
    if (!localStorage.getItem("isLogin")) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            state: { message: "login ulang" },
          }}
        />
      );
    } else {
      return (
        <React.Fragment>
          <Navbar {...this.props} />
          <div class="container-fluid py-4 bg-profil">
            <div class="row ">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="row">
                  <button
                    type="button"
                    class="btn btn-outline-info float-left m-3 col-md-6 col-sm-12 w-75"
                  >
                    <Link to="/addproduct"> Add Product</Link>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-info float-left m-3 col-md-6 col-sm-12 w-75"
                  >
                    <Link to="/editproduct"> Edit Product</Link>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-info float-left  m-3 col-md-6 col-sm-12 w-75"
                  >
                    <Link to="/deleteproduct"> Delete Product</Link>
                  </button>
                </div>
                <div class="card bg-light my-3 w-100 p-3 bg-profil">
                  <div class="card-header">My Product</div>
                  <div class="card-body">
                    <MyProduct {...this.props} />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 border p-5">
                <div class="row">
                  <div class="col-4 ">
                    <h1>
                      {" "}
                      <i class="fas fa-user "></i>
                    </h1>
                  </div>
                  <div class="col-8 text-left">
                    <h3>Nama lengkap: {bio.name}</h3>
                    <h5>Gender: {bio.sex}</h5>
                    <h5>Age: {bio.age}</h5>
                    <h5>Address: {bio.address}</h5>
                    <h5>Email: {bio.email}</h5>
                    <h5>Telephone: {bio.telephone}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      );
    }
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
  getMyProduct,
  getTopProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
