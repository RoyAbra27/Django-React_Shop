import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserName,
  selectToken,
  selectStaff,
  logout,
} from "../app/Authentication/authenticationSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const isStaff = useSelector(selectStaff);
  const token = useSelector(selectToken);

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
        {/* <div className="container-fluid"> */}
        <ul className="navbar-nav ">
          {token && <button onClick={() => dispatch(logout())}>logout</button>}

          <li className="nav-item">
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/product">
              ALL Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " to="/cart">
              MyCart
            </Link>
          </li>
          {token && (
            <li className="nav-item">
              <Link className="nav-link " to="/myOrders">
                My orders
              </Link>
            </li>
          )}
          {!token && (
            <li className="nav-item">
              <Link className="nav-link " to="/login">
                Login\Register
              </Link>
            </li>
          )}

          {isStaff && (
            <li className="nav-item">
              <Link className="nav-link " to="/staffGUI">
                STAFF GUI
              </Link>
            </li>
          )}
          {isStaff && (
            <li className="nav-item">
              <Link className="nav-link " to="/Admin">
                ADMIN WEB
              </Link>
            </li>
          )}
        </ul>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default NavBar;
