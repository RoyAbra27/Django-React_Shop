import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";

import Login from "./app/Authentication/Login";
import Product from "./app/Products/Product";
import SingleProd from "./app/Products/SingleProd";
import Category from "./app/Category/Category";
import StaffCAT from "./app/Category/StaffCAT";
import Register from "./app/Authentication/Register";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            {/* <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} /> */}
            <Route path="/product" element={<Product />}>
              <Route path=":prodID" element={<SingleProd />}></Route>
            </Route>
            <Route path="/category" element={<Category />}>
              <Route path=":catID" element={<Product />}>
                <Route
                  path="/category/:catID/product/:prodID"
                  element={<SingleProd />}
                ></Route>
              </Route>
            </Route>
            <Route path="/staffGUI" element={<StaffCAT />}>
              <Route
                path="/staffGUI/category_product"
                element={<StaffCAT></StaffCAT>}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
