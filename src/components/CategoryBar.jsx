import React from "react";
import { Link } from "react-router-dom";
import "../style/category_bar.css";
const CategoryBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-success bg-success">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link nostyle">
              vegetable <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link nostyle">
              fruit <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link nostyle">
              egg <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link nostyle">
              meat <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link nostyle">
              fish <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link nostyle">
              spices <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default CategoryBar;
