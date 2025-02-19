import "./index.css";
import logo from "./assets/app-logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <div className="search-bar-wrapper">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="header-left">
          <button onClick={() => navigate("/profile")} className="btn-55">
            <span>Profile</span>
          </button>
          <button onClick={() => navigate("/about")} className="btn-55">
            <span>About</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
