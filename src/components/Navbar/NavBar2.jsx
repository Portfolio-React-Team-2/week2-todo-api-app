import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import NavStyles from "./navbarStyles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState("static");
  const navBarRef = useRef();

  const openCloseNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setStickyNavbar("fixed");
      } else {
        setStickyNavbar("static");
      }
    });
  }, []);

// style={{ position: stickyNavbar }}

  return (
    <NavStyles >
      <input type="checkbox" name="navToggle" id="navToggle" />
      <div className="logo">
        <Link to={"/"}>
          <img src={Logo} alt="todo-app" />
        </Link>

        <div className="strokes-container">
          <label htmlFor="navToggle">
            <div className="strokes" onClick={openCloseNav}>
              <div className="stroke"></div>
              <div className="stroke"></div>
              <div className="stroke"></div>
            </div>
          </label>
        </div>
      </div>
      <div className="lists">
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
