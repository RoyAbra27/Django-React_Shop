import React, { useEffect } from "react";
import { Outlet, Link, NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductAsync, selectProductList } from "./ProductSlice";

const SingleProd = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductList);
  let params = useParams();
  let prod_id = params.prodID;
  let cat_id = params.catID;

  //   const mysingleProd = products);

  //   const singleProd = products.filter((prod) => prod.id === prodID);

  //   run every time we open menu page
  useEffect(() => {
    dispatch(getProductAsync((cat_id = cat_id), (prod_id = prod_id)));
  }, [prod_id]);

  return (
    <div>
      <h3>your prod:</h3>
      {prod_id}
      {products.map((prod) => (
        <p>
          {prod._id && prod.description + " id: " + prod._id} <br></br>
          <br></br>
        </p>
      ))}
    </div>
  );
};

export default SingleProd;
