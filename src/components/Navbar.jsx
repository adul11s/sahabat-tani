import React from "react";
import { Link } from "react-router-dom";
import { doLogout } from "../store/actions/loginAction";
import { connect } from "react-redux";
import "../style/navbar.css";
import Search from "./Search";

const Navbar = (props) => {
  const signOut = async () => {
    await props.doLogout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-nav">
        <Link to="/">
          <img
            className="navbar-brand"
            src={require("../images/sahabat-tani.png")}
            width="100"
            height="100"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link className="nav-link unstyle" to="/" href="">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link unstyle" to="/category" href="">
                Category <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <Search {...props} />
          {localStorage.getItem("isLogin") ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/cart" className="nav-link unstyle" href="">
                  <i className="fas fa-cart-arrow-down"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link unstyle" href="">
                  Profile <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => signOut()}
                  className="nav-link unstyle"
                  href="#"
                >
                  Sign Out <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/signin" className="nav-link unstyle" href="#">
                  Sign In <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link unstyle" href="#">
                  Sign Up <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.login,
    logout: state.login.isLogin,
  };
};

const mapDispatchToProps = {
  doLogout: doLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
