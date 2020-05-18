import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Index";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";

import { Provider } from "react-redux";
import store from "../store";
import Category from "../pages/Category";
import About from "../pages/About";
import SignUp from "../pages/SignUp";
import ProductDetail from "../pages/ProductDetail";
import AddProduct from "../pages/AddProduct";
import DeleteProduct from "../pages/DeleteProduct";
import EditProduct from "../pages/EditProduct";
import Cart from "../pages/Cart";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/addproduct" component={AddProduct} />
          <Route exact path="/deleteproduct" component={DeleteProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/editproduct" component={EditProduct} />
          <Route exact path="/productdetail/:id" component={ProductDetail} />
          <Route exact path="/category/:category" component={Category} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
