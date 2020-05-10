import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";

const Profile = (props) => {
  if (!props.dataUser.isLogin) {
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
        <Navbar {...props} />
        <div class="container mt-4">
          <div class="row d-flex justify-content-center">
            <div class="col-10 border p-5">
              <div class="row">
                <div class="col-4">
                  <img src={props.dataUser.avatar} alt="" class="img-fluid" />
                </div>
                <div class="col-8">
                  <h3>Nama lengkap: {props.dataUser.username}</h3>
                  <h5>Email: {props.dataUser.email}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.login,
  };
};
export default connect(mapStateToProps)(Profile);
