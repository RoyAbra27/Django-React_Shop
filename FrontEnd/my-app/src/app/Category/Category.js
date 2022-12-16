import React, { useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoryList, getCategoryAsync } from "./categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);
  // console.log(categories)

  useEffect(() => {
    dispatch(getCategoryAsync());
  }, []);

  return (
    <div>
      <h3 className="mt-4">
        <i>Our Menu</i>
      </h3>
      {categories.map((cat) => (
        <p> {cat.name + " id: " + cat._id} </p>
      ))}

      {/* <hr className="d-sm-none" /> */}
      {/* <Outlet></Outlet> */}

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Category;
