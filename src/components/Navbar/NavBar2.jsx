import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import NavStyles from "./navbarStyles";

const NavBar = () => {
  return (
    <NavStyles>
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="todo-app" />
        </Link>

        <div className="strokes-container">
          <div className="strokes">
            <div className="stroke"></div>
            <div className="stroke"></div>
            <div className="stroke"></div>
          </div>
        </div>
      </div>
      <div className="lists">
        <div></div>

        <ul>
          <li>
            <Link to={"/"}>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={""}>Features</Link>
          </li>
          <li>
            <Link to={""}>Pricing</Link>
          </li>
          <li>
            <Link to={""}>Blog</Link>
          </li>
          <li>
            <Link to={""}>Contact Us</Link>
          </li>
        </ul>
        <div className="nav--right">
          <Link to={"/auth"}>
            <span>Sign_In</span>
          </Link>
          <Link to={"/auth/register"}>
            <span className="tryforfree">Try_for_free</span>
          </Link>
        </div>
      </div>
    </NavStyles>
  );
};

export default NavBar;
