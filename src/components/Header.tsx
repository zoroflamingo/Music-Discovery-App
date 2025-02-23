import "./Header.css";
import logo from "../assets/app-logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
        <div className="search-bar-wrapper">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="header-right">
          <NavLink to="/profile" className="btn-55">
            <span>Profile</span>
          </NavLink>
          <NavLink to="/about" className="btn-55">
            <span>About</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
