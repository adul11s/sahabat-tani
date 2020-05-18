import React from "react";
import { Link } from "react-router-dom";
import "../style/category_bar.css";
const CategoryBar = (props, changeRouter) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-success bg-cat-bar">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link nostyle" href="/category/1">
              vegetable <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nostyle" href="/category/2">
              fruit <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nostyle" href="/category/3">
              egg <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nostyle" href="/category/4">
              meat <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nostyle" href="/category/5">
              fish <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nostyle" href="/category/6">
              spices <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default CategoryBar;
