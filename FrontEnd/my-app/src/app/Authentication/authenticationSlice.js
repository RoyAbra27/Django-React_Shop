import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./LoginAPI";
import jwt_decode from "jwt-decode";

// State - data (init)
const initialState = {
  userName: "",
  email: "",
  token: "",
  logged: false,
  staff: false,
  superuser: false,

  firstName: "",
  lastName: "",
  phone: "",
  adress: "",
  gender: "",
};

// async (1)
// simple async method (component can call it...)

export const doLoginAsync = createAsyncThunk("auth/login", async (data) => {
  console.log(data);
  const response = await login(data);
  return response.data;
});

export const doRegisterAsync = createAsyncThunk(
  "auth/register",
  async (newData) => {
    console.log(newData);
    const response = await register(newData);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = "";
      state.logged = false;
      state.userName = "";
      state.email = "";
      state.staff = false;
      state.superuser = false;
      console.log("logged " + state.logged);
    },
  },
  //  async  (3)
  //   happens when async done - callback
  extraReducers: (builder) => {
    builder
      .addCase(doLoginAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        if (action.payload.access) {
          state.token = action.payload.access;
          state.logged = true;
          state.userName = jwt_decode(action.payload.access).username;
          state.email = jwt_decode(action.payload.access).email;
          state.staff = jwt_decode(action.payload.access).staff;
          state.superuser = jwt_decode(action.payload.access).superuser;
          console.log("logged " + state.logged);

          // consider wich parts we want to show
        }
      })
      .addCase(doRegisterAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.access) {
          console.log("sign up successfully");
        }
      });
  },
});

// export sync method
export const { logout } = loginSlice.actions;

// export any part of the state
export const selectLogged = (state) => state.auth.logged;
export const selectEmail = (state) => state.auth.email;
export const selectUserName = (state) => state.auth.userName;
export const selectToken = (state) => state.auth.token;
export const selectStaff = (state) => state.auth.staff;
export const selectSuperUser = (state) => state.auth.superUser;
export const selectFirstName = (state) => state.auth.firstName;
export const selectLastName = (state) => state.auth.lastName;
export const selectPhone = (state) => state.auth.phone;
export const selectAdress = (state) => state.auth.adress;
export const selectGender = (state) => state.auth.gender;

// export the reducer to the applicaion
export default loginSlice.reducer;
