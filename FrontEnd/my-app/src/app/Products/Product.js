import React, { useEffect } from "react";
import { Outlet, Link, NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductAsync, selectProductList } from "./ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductList);
  let params = useParams();
  let cat_id = params.catID;
  let prod_id = params.prodID;

  //run every time we open menu page

  //run every time we switch category
  useEffect(() => {
    if (prod_id) {
      dispatch(getProductAsync(cat_id, prod_id));
    } else {
      dispatch(getProductAsync(0));
    }
  }, [cat_id]);

  return (
    <div>
      <h3>products:</h3>
      {cat_id &&
        products.map((prod) => (
          <Link
            className="nav-link"
            key={prod._id}
            to={`/category/${cat_id}/product/${prod._id}`}
          >
            {prod.description + " id: " + prod._id} <br></br>
            <br></br>
          </Link>
        ))}
      {!cat_id &&
        products.map((prod) => (
          <Link className="nav-link" key={prod._id} to={`/product/${prod._id}`}>
            {prod.description + " id: " + prod._id} <br></br>
            <br></br>
          </Link>
        ))}

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Product;
