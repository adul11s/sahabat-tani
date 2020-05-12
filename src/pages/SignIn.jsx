import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/actions/loginAction";
import Footer from "../components/Footer";
import "../style/signin.css";
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
          <div class="container-fluid py-4 bg-signin">
            <div class="row d-flex justify-content-center">
              <div class="col-5 border bg-card rounded">
                <form onSubmit={(el) => el.preventDefault()}>
                  <div class="form-group">
                    <div>
                      <img
                        className="img-fluid"
                        src={require("../images/sahabat-tani.png")}
                        width="200"
                        height="200"
                        alt=""
                      />
                    </div>

                    <label for="exampleInputEmail1">Username</label>
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
                      Never share your username and password with anyone else.
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
                  <button
                    class="btn btn-primary rounded-pill w-100"
                    onClick={() => this.login()}
                  >
                    Sign In
                  </button>
                  <div className="pb-3">Belum punya akun? Daftar disini</div>
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
