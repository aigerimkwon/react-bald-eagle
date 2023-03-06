import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdSystemSecurityUpdateGood } from "react-icons/md";
import { ReactComponent as Logo } from "../icons/Logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Logo className="logo" />
        <ul>
          <Link to="/">
            <IoHome />
            Home
          </Link>
          <Link to="/new">
            {" "}
            <MdSystemSecurityUpdateGood />
            New
          </Link>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
