import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Index";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";

import { Provider } from "react-redux";
import store from "../store";
import Category from "../pages/Category";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="category" component={Category} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />

          {/* <Route exact path="/:category" component={Category} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
