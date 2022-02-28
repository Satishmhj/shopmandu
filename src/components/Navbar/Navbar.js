import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FaUserAlt, FaHome } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import CartDetail from "../CartDetail/CartDetail";
import { useDispatch, useSelector } from "react-redux";
import productReducer from "../../redux/reducer/productReducer";
import { actionFetchApi } from "../../redux/actions/actionFetchApi";
import { FETCHAPI } from "../../redux/constants";

const Navbar = (props) => {
  const { count, cd, setCd, handleAddToCart, setCount } = props;

  const [iconCart, setIconCart] = useState(false);

  return (
    <>
      {iconCart && (
        <CartDetail setIconCart={setIconCart} cd={cd} setCd={setCd} />
      )}
      <nav className="navbar navbar-default navbar-light justify-content-between fixed-top ">
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
                <div className="position-relative">
                  <BsCartFill
                    onClick={() => {
                      setIconCart(!iconCart);
                    }}
                    handleAddToCart={() => handleAddToCart(setCount(count + 1))}
                  />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light rounded-circle">
                    {count}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </div>
              </li>
              <li>
                <FaUserAlt />
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
