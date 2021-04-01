import React from "react";
import "./Header.css";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Login from "./Login.js";
import { auth } from "./firebase";
function Header() {
  var [basketCount, setBasketCount] = React.useState(0);
  const [{ basket, user }, dispatch] = useStateValue();
  const authoriseUser = () => {
    if (user) {
      auth.signOut();
      // dispatch({ type: "SET_USER", user: null });
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="ama_logo"
        />
      </Link>
      <div className="header__search">
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="search"
          className="header__searchInput"
        />
        <SearchIcon
          className="header__searchIcon"
          onClick={() => alert(`you have search for item ${basketCount}`)}
        />
      </div>
      <div className="header__nav">
        <div className="header__options">
          <span className="header__optionLineOne">
            Hello, {!user ? "Guest" : user.email}
          </span>
          <Link to={!user && "./login"}>
            <span
              className="header__optionLineTwo"
              onClick={authoriseUser}
              style={{ color: "white" }}
            >
              {user ? "Sign Out" : "Sign In"}
            </span>
          </Link>
        </div>

        <div className="header__options">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&Order</span>
        </div>

        <div className="header__options">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__options">
          <div className="header__basket">
            <Link to="/checkout">
              <ShoppingCartIcon className="header__basketIcon" />
            </Link>
            <span className="header__OptionLineTwo  header__basketCount">
              {basket.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
