import React, { useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoryList, getCategoryAsync } from "./categorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoryList);

  useEffect(() => {
    dispatch(getCategoryAsync());
  }, []);

  return (
    <div>
      <h3 className="mt-4">
        <i>Our Menu</i>
      </h3>

      {categories.map((cat) => (
        <Link className="nav-link" key={cat._id} to={`/category/${cat._id}`}>
          {cat.name + " id: " + cat._id} <br></br>
          <br></br>
        </Link>
      ))}

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Category;
