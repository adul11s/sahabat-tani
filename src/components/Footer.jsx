import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";
const Footer = (props) => {
  return (
    <div className="container-fluid bg-foot rounded pt-3">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <table className="text-left">
            <tr className="bold unfooter">
              <td>
                {" "}
                <h3>About</h3>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" to="/about">
                  Company
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" to="/">
                  Career
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <table className="text-left">
            <tr className="bold unfooter">
              <td>
                {" "}
                <h3>Partner</h3>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://alterra.co.id/">
                  <img
                    className="ukuran-logo-footer"
                    src={require("../images/logo-ALTA@2x.png")}
                    alt=""
                  />{" "}
                  Alterra
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://ipb.ac.id/">
                  <img
                    className="ukuran-logo-footer"
                    src={require("../images/Logo-IPB.png")}
                    alt=""
                  />{" "}
                  IPB
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://pertanian.go.id">
                  <img
                    className="ukuran-logo-footer"
                    src={require("../images/kementan.png")}
                    alt=""
                  />{" "}
                  KEMENTAN RI
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <table className="text-left">
            <tr className="bold unfooter">
              <td>
                {" "}
                <h3>Social Media</h3>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://www.instagram.com">
                  <i class="fab fa-instagram-square"></i>&nbsp;@instagram
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://www.facebook.com">
                  <i class="fab fa-facebook-f"></i>&nbsp;facebook
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://www.twitter.com">
                  <i class="fab fa-twitter"></i>&nbsp;twitter
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://www.youtube.com">
                  <i class="fab fa-youtube"></i>&nbsp;youtube
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <table className="text-left">
            <tr className="bold unfooter">
              <td>
                {" "}
                <h3>Contact Us</h3>{" "}
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="">
                  <i class="fas fa-envelope"></i>&nbsp;sahabatTani@mail.com
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="">
                  <i class="fas fa-phone-volume"></i>&nbsp;+62 22- 88776655
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="">
                  <i class="fas fa-map-marker-alt"></i>&nbsp;Jalan pertanian No
                  1 Jakarta Indonesia
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Footer;
