import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Cats from "./AllCats/AllCats";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Favorites from "./FavoriteCats/FavoriteCats";

class App extends React.Component {
  render() {
    console.log(window.location.pathname);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/" component={Cats} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
