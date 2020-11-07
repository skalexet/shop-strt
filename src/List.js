import React from "react";
import "./List.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function List({}) {
  const [{ list }, dispatch] = useStateValue();

  //test hardcode
  const id = 21212;
  const title = "Plaid Green_Romb/120x150";
  const image =
    "https://m.media-amazon.com/images/I/51dZXjWApDL._AC_SR160,160_.jpg";
  const price = 11.99;
  //

  const addToList = () => {
    const item = {
      id: id,
      title: title,
      image: image,
      price: price
    };

    list.push(item);
    console.log(list);
  };

  return (
    <div className="list">
      <div className="list__container">
        <h5 className="list__title">Basket list</h5>
        <Product
          onLoad={addToList()}
          id={id}
          title={title}
          image={image}
          price={price}
        />

        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
        {/* {Product} */}
      </div>
    </div>
  );
}

export default List;
