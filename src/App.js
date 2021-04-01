import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    return auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  var [total, setTotal] = React.useState(0);
  function Total(total, price) {
    setTotal(total + price);
  }
  console.log(total);
  return (
    <Router>
      <div className="app">
        <Switch>
          {
            <Route path="/login">
              <Login />
            </Route>
          }
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home Total total={total} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
