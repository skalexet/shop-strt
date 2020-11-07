import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
function Home() {
  const [{ list }, dispatch] = useStateValue();
  console.log();
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://ywtshop.org.uk/wp-content/uploads/2020/07/000421-cards-5-1500x750.jpg"
          alt=""
        />

        <div className="home__productLine">
          <Product
            id="13122"
            title="Pillow Gray_Cell/64x64"
            image="https://m.media-amazon.com/images/I/51MxE9U3lCL._AC_SY200_.jpg"
            price={7.99}
          />

          <Product
            id="13117"
            title="Pillows set #Diff/40x40"
            image="https://m.media-amazon.com/images/I/51mlcHD5HmL._AC_SY200_.jpg"
            price="24.99"
          />
        </div>

        <div className="home__productLine">
          <Product
            id="13129"
            title="Plaid Green_Romb/120x150"
            image="https://m.media-amazon.com/images/I/51dZXjWApDL._AC_SR160,160_.jpg"
            price="11.99"
          />

          <Product
            id="13138"
            title="Plaid Wh_Rd_Gr/150x150"
            image="https://images-na.ssl-images-amazon.com/images/I/81h6kMbA4-L._AC_UL160_SR160,160_.jpg"
            price="9.99"
          />

          <Product
            id="13139"
            title="Plaids Cozy #Diff/#Diff"
            image="https://m.media-amazon.com/images/I/51ki2skiBLL._AC_SR160,160_.jpg"
            price="11.99"
          />
        </div>

        <div className="home__productLine">
          <Product
            id="13134"
            title="ReachMe Womens Oversized Sherpa Pullover Hoodie with Pockets Fuzzy Fleece Sweatshirt Fluffy Coat"
            image="https://m.media-amazon.com/images/I/61QGjYLMQYL._AC_UL320_.jpg"
            price="28.99"
          />
          <Product
            id="13146"
            title="Adibosy Womens Crew Neck Sweater Color Block Sweaters Long Sleeve Striped Knit Loose Pullover Tops，Sweaters for Women"
            image="https://m.media-amazon.com/images/I/510IKyFtbZL._AC_SR160,200_.jpg"
            price="27.99"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
