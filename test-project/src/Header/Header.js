import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <button className="header__button">
          <Link to="/" className="header__link">Все котики</Link>
        </button>

        <button className="header__button">Любимые котики</button>
      </div>
    );
  }
}

export default Header;
