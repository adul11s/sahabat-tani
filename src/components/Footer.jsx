import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";
const Footer = (props) => {
  return (
    <div className="container-fluid bg-success rounded mt-5">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12">
          <table className="text-left">
            <tr className="bold unfooter">
              <td> About</td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" to="/">
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
        <div className="col-lg-3 col-md-3 col-sm-12">
          <table className="text-left">
            <tr className="bold unfooter">
              <td> Partner </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://alterra.co.id/">
                  Alterra
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://ipb.ac.id/">
                  IPB
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://pertanian.go.id">
                  KEMENTAN RI
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <table className="text-left">
            <tr className="bold unfooter">
              <td> Social Media</td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://www.instagram.com">
                  <i class="fab fa-instagram-square"></i>@instagram
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://www.facebook.com">
                  <i class="fab fa-facebook-f"></i>facebook
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://www.twitter.com">
                  <i class="fab fa-twitter"></i>twitter
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="https://www.youtube.com">
                  <i class="fab fa-youtube"></i>youtube
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <table className="text-left">
            <tr className="bold unfooter">
              <td> Contact Us </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="">
                  <i class="fas fa-envelope"></i> sahabatTani@mail.com
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="">
                  <i class="fas fa-phone-volume"></i> +62 22- 88776655
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link className=" unfooter" href="">
                  <i class="fas fa-map-marker-alt"></i> Jalan pertanian No 1
                  Jakarta Indonesia
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
