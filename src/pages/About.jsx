import React, { Component } from "react";
import "../style/jumbotron.css";
import Navbar from "../components/Navbar";
import { doLogout } from "../store/actions/loginAction";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

class About extends Component {
  render() {
    return (
      <div>
       {localStorage.getItem("isLogin") ? (
          <React.Fragment>
            <Navbar />
            <div class="container-fluid bg-about py-5">
              <Jumbotron />
              <div class="card mt-5 ">
                <div class="row no-gutters">
                  <div class="col-md-4 col-sm-12">
                    <img
                      src={require("../images/traktor.jpg")}
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 col-sm-12">
                    <div class="card-body bg-card">
                      <h3 class="card-title">#PETANISEJAHTERA</h3>
                      <p class="card-text text-left">
                        Sahabat Tani adalah penghubung antara petani dengan
                        konsumen secara langsung, sehingga kualitas produk yang
                        diterima konsumen lebih terjamin, dan dapat meningkatkan
                        kesejahteraan petani Indonesia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-5 ">
                <div class="row no-gutters">
                  <div class="col-md-4 col-sm-12">
                    <img
                      src={require("../images/traktor.jpg")}
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8 col-sm-12">
                    <div class="card-body bg-card">
                      <h3 class="card-title">#TENTANGKITA</h3>
                      <p class="card-text text-left">
                        Lahirnya sahabat tani diawali oleh masih banyaknya
                        pejuang pejuang pangan di Indonesia yang memiliki taraf
                        kehidupan yang tidak layak. kami tergugah untuk
                        membangun indonesia dengan memajukan kesejahteraan
                        petani-petani Indonesia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
  };
};

const mapDispatchToProps = {
  doLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(About);
