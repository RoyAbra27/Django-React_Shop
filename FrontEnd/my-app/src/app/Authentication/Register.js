import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

const Register = () => {
  //   const loggedUsername = useSelector(selectUserName);
  //   const email = useSelector(selectEmail);
  //   const token = useSelector(selectToken);
  //   const logged = useSelector(selectLogged);
  //   const staff = useSelector(selectStaff);
  //   const superuser = useSelector(selectSuperUser);
  //   const firstName = useSelector(selectFirstName);
  //   const lastName = useSelector(selectLastName);
  //   const phone = useSelector(selectPhone);
  //   const adress = useSelector(selectAdress);
  //   const gender = useSelector(selectGender);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [registerMSG, setRegisterMSG] = useState(false);

  const registerSubmit = doRegisterAsync({
    is_staff: 0,
    email: email,
    password: password,
    username: username,
    first_name: first_name,
    last_name: last_name,
    phone: phone,
    address: address,
    gender: gender,
  });
  //   setRegisterMSG(true);

  return (
    <div style={{ backgroundColor: "wheat" }}>
      <h1>register</h1>
      <form id={"register"}>
        <div>
          First name: <input onChange={(e) => setFirst_name(e.target.value)} />
          <br></br> <br></br>
          last_name: <input
            onChange={(e) => setLast_name(e.target.value)}
          />{" "}
          <br></br> <br></br>
          email: <input
            onChange={(e) => setEmail(e.target.value)}
          /> <br></br> <br></br>
          Username: <input onChange={(e) => setUsername(e.target.value)} />{" "}
          <br></br> <br></br>
          Address: <input onChange={(e) => setAddress(e.target.value)} />{" "}
          <br></br> <br></br>
          Phone: <input
            onChange={(e) => setPhone(e.target.value)}
          /> <br></br> <br></br>
          gender: <input onChange={(e) => setGender(e.target.value)} />{" "}
          <br></br> <br></br>
          Password:{" "}
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br></br>
        </div>
      </form>

      <button
        type={"submit"}
        form={"register"}
        value={"Submit"}
        onClick={() =>
          dispatch(
            registerSubmit()
            // doRegisterAsync({
            //   is_staff: 0,
            //   email: email,
            //   password: password,
            //   username: username,
            //   first_name: first_name,
            //   last_name: last_name,
            //   phone: phone,
            //   address: address,
            //   gender: gender,
            // })
          )
        }
      >
        Register
      </button>
      {registerMSG === true && <h2>Registered successfully!</h2>}
    </div>
  );
};

export default Register;
