import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { doRegister, changeInputUser } from "../store/actions/loginAction";
import Footer from "../components/Footer";
import "../style/signin.css";
class SignUp extends Component {
  register = async () => {
    await this.props.doRegister();
    const isLogin = this.props.isLogin;
    console.log(isLogin);
    if (isLogin) {
      this.props.history.push("/signin");
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
                    <label for="exampleInputEmail1">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input
                      type="number"
                      name="age"
                      placeholder="Age"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Sex</label>
                    <input
                      type="text"
                      name="sex"
                      placeholder="Sex"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Telephone</label>
                    <input
                      type="text"
                      name="telephone"
                      placeholder="Telephone"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <button
                    class="btn btn-primary rounded-pill w-100 mb-3"
                    onClick={() => this.register()}
                  >
                    Sign Up
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
    username: state.login.username,
    password: state.login.password,
    isLogin: state.login,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  doRegister,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
