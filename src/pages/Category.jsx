import React, { Component } from "react";
import "../style/category_detail.css";
import Navbar from "../components/Navbar";
import { doLogout } from "../store/actions/loginAction";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import CategoryBar from "../components/CategoryBar";
import CategoryDetail from "../components/CategoryDetail";

class Category extends Component {
  //   changeRouter = async (category) => {
  //     await this.props.history.replace("/movie" + category);
  //     const paramCategory = this.props.match.params.category;
  //     this.props.getMovie(paramCategory);
  //   };

  //   handleInputChange = async (event) => {
  //     let value = event.target.value;
  //     await this.setState({ search: value });
  //     this.searchNews(value);
  //   };

  //   searchNews = async (keyword) => {
  //     if (keyword.length > 2) {
  //       await this.setState({ isLoading: true });
  //       try {
  //         const response = await axios.get(
  //           baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey
  //         );
  //         this.setState({ newsFeed: response.data.articles, isLoading: false });
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };
  render() {
    return (
      <div>
        {this.props.dataUser.isLogin ? (
          <React.Fragment>
            <Navbar />
            <div className="bg-category">
              <CategoryBar />
              <CategoryDetail />
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
export default connect(mapStateToProps, mapDispatchToProps)(Category);
