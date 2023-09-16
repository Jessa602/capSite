import { NavLink } from "react-router-dom";
import { useAuth } from "../components/Auth";

export const NavBar = () => {
  const navelinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink style={navlinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navlinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navlinkStyles} to="/catagories">
        Catagories
      </NavLink>
      <NavLink style={navlinkStyles} to="/profile">
        Profile
      </NavLink>
    </nav>
  );
};
