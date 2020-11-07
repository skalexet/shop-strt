import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <h1>Your logo</h1>
        </div>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionAbove">
              Hello {!user ? "Гость" : user.mail}
            </span>
            <span className="header__optionBellow">
              {user ? "Выйти" : "Войти/Создать"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionAbove">Untitled</span>
          <span className="header__optionBellow">(Undefined still)</span>
        </div>

        <div className="header__option">
          <span className="header__optionAbove">Untitled</span>
          <span className="header__optionBellow">(Undefined still)а</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionBellow header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
