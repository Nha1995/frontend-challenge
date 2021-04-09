import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Cats from "./All-cats/All-cats";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Cats} />
        </Switch>
      </div>
    );
  }
}

export default App;
