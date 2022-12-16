import React, { useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategoryList,
  getCategoryAsync,
  addCategoryAsync,
  deleteCategoryAsync,
  updateCategoryAsync,
} from "./categorySlice";
import { selectToken } from "../Authentication/authenticationSlice";

const StaffCAT = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);
  const [name, setName] = useState("");
  const token = useSelector(selectToken);
  const [newName, setNewName] = useState("");

  const [change1, setChange1] = useState("false");
  const [change2, setChange2] = useState("0");
  const [change3, setChange3] = useState("0");

  useEffect(() => {
    dispatch(getCategoryAsync());
  }, [change1, change2, change3]);

  const refresh = () => {
    dispatch(getCategoryAsync());
  };

  return (
    <div>
      <h3 className="mt-4">
        <i>Our Categories</i>
      </h3>

      <h5 className="mt-4">
        <i>Update\ Add new category</i>
      </h5>
      <i>Description: </i>
      <input onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addCategoryAsync({ tempCat: { name: name }, token: token }));
          setChange3(name);
        }}
      >
        Add New Category
      </button>
      <br />
      <br />

      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          {categories.map((tempCat) => (
            <Link
              className="nav-link"
              key={tempCat._id}
              to={`/staffGUI/category_product/${tempCat._id}`}
            >
              {tempCat.name} (Category ID: {tempCat._id} )
              <button
                onClick={() => {
                  dispatch(
                    deleteCategoryAsync({ id: tempCat._id, token: token })
                  );
                  setChange2(tempCat._id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setChange1(name);
                  dispatch(
                    updateCategoryAsync({
                      tempCat: { name: name },
                      id: tempCat._id,
                      token: token,
                    })
                  );
                }}
              >
                Update
              </button>
            </Link>
          ))}
        </li>
      </ul>
      <button onClick={() => refresh()}>Refresh</button>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default StaffCAT;
