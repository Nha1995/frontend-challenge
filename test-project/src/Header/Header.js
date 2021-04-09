import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    catsPage: true,
  };

  opacityHandler = (value) => {
    if (value === "cats") {
      this.setState({ catsPage: true });
    } else {
      this.setState({ catsPage: false });
    }
  };

  render() {
    return (
      <div className="header">
        <Link
          to="/"
          onClick={() => this.opacityHandler("favorite cats")}
          onClick={() => this.opacityHandler("cats")}
          className={
            this.state.catsPage
              ? "header__link"
              : "header__link header__opacity"
          }
        >
          Все котики
        </Link>

        <Link
          to="/favorites"
          onClick={() => this.opacityHandler("favorite cats")}
          className={
            this.state.catsPage
              ? "header__link header__opacity"
              : "header__link"
          }
        >
          Любимые котики
        </Link>
      </div>
    );
  }
}

export default Header;
