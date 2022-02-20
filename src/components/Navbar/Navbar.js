import React, { useState } from "react";
import "./navbar.css";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
import { Badge } from "react-bootstrap";

const Navbar = (props) => {

  // const [count, setCount] = useState();

  const{count} = props;

  return (
    <nav className="navbar navbar-default navbar-light justify-content-between " >
      <div className="container">
        <a className="navbar-brand">
          <img
            className="logo"
            src="https://rojal.s3.ap-south-1.amazonaws.com/rojal/logo/7ae0eb37-5db4-4795-b45a-c091c2dababf.png"
            alt="logo"
          />
          {/* <FcShop /> */}
          <b style={{ padding: "2px" }}> SHOPMANDU</b>
        </a>
        <form class="form-inline">
          <ul>
            <li>
              <FaHome />
            </li>
            <li>
              <BsCartFill />
              <span class="badge badge-pill badge-danger">{count}</span>
            </li>
            <li>
              <FaUserAlt />
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
