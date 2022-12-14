import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link, NavLink } from "react-router-dom";

import {
  logout,
  doLoginAsync,
  doRegisterAsync,
  selectAdress,
  selectEmail,
  selectFirstName,
  selectGender,
  selectLastName,
  selectLogged,
  selectPhone,
  selectStaff,
  selectSuperUser,
  selectToken,
  selectUserName,
} from "./authenticationSlice";
const Login = () => {
  const dispatch = useDispatch();

  const loggedUsername = useSelector(selectUserName);
  const email = useSelector(selectEmail);
  const token = useSelector(selectToken);
  const logged = useSelector(selectLogged);
  const staff = useSelector(selectStaff);
  const superuser = useSelector(selectSuperUser);

  //   const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {logged === false && <h2>please log in</h2>}
      Username: <input onChange={(e) => setUsername(e.target.value)} />
      Password:{" "}
      <input type={"password"} onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={() =>
          dispatch(
            doLoginAsync({
              username: username,
              password: password,
            })
          )
        }
      >
        Login
      </button>
      <br></br> <br></br>
      <br></br>
      {logged && <button onClick={() => dispatch(logout())}>logout</button>}
      {logged === true && <div>hello {loggedUsername}</div>}
      {/* {errorMsg ? <label>{errorMsg}</label> : null} */}
      {logged === false && (
        <button>
          <Link className="nav-link" to={`/register`}>
            Don't have an account yet? Create one!
          </Link>
        </button>
      )}
    </div>
  );
};
export default Login;
