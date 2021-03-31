import React from "react";
import "./Header.css";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  var [basketCount, setBasketCount] = React.useState(0);
  const [{ basket }, dispatch] = useStateValue();
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
          <span className="header__optionLineOne">Hello, Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
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
