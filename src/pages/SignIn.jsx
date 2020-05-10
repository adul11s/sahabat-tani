import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/actions/loginAction";

class SignIn extends Component {
  login = async () => {
    await this.props.doLogin();
    const isLogin = this.props.isLogin;
    console.log(isLogin);
    if (isLogin) {
      this.props.history.push("/profile");
    }
  };

  render() {
    const message = this.props.location.state
      ? this.props.location.state.message
      : "masukkan username dan password";
    return (
      <div>
        <React.Fragment>
          <Navbar {...this.props} />
          <div class="container mt-4">
            <div class="row d-flex justify-content-center">
              <div class="col-5 border p-5">
                <form onSubmit={(el) => el.preventDefault()}>
                  <div class="form-group">
                    <div>
                      <img
                        className=""
                        src={require("../images/sahabat-tani.png")}
                        width="200"
                        height="200"
                        alt=""
                      />
                    </div>

                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="text"
                      name="nama"
                      placeholder="username"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="sandi"
                      placeholder="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      onChange={(el) => this.props.changeInput(el)}
                    />
                  </div>
                  <button class="btn btn-primary" onClick={() => this.login()}>
                    Sign In
                  </button>
                  <div>Belum punya akun? Daftar disini</div>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nama: state.login.nama,
    sandi: state.login.sandi,
    isLogin: state.login,
  };
};

const mapDispatchToProps = {
  changeInput: (el) => changeInputUser(el),
  doLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
