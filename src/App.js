import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  var [total, setTotal] = React.useState(0);
  function Total(total, price) {
    setTotal(total + price);
  }
  console.log(total);
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home Total total={total} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
