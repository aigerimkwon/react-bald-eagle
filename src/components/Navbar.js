import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { MdPermDeviceInformation } from "react-icons/md";
import { ReactComponent as Logo } from "../icons/Logo.svg";
const Navbar = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <Link to="/">
          <MdOutlineHome />
          Home
        </Link>
        <Link to="/new">
          {" "}
          <MdSystemSecurityUpdateGood />
          New to do
        </Link>
        <Link to="/">
          {" "}
          <MdPermDeviceInformation /> About
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
