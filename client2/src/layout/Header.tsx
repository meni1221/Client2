import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import TopNavLink from "../components/TopNavLink";

export default function Header() {
  return (
    <div>
      <header className="nav-bar">
        <div className="nav left-side">
          <TopNavLink to="/">Home</TopNavLink>
          <TopNavLink to="/">About</TopNavLink>
          <TopNavLink to="/">Hello</TopNavLink>
          <TopNavLink to="/">Hello</TopNavLink>
        </div>

        {/* <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div> */}
        <div className="nav right-side">
        <TopNavLink to="/">Logout</TopNavLink>
        </div>
      </header>
    </div>
  );
}
