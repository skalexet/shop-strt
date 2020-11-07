import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import Login from "./Login";
import { auth } from "./firebase";
import Checkout from "./Checkout";
import List from "./List";

function App() {
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("This user is ", authUser);

      if (authUser) {
        dispatchEvent({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatchEvent({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* <Route path="/list">
            <Header />
            <List />
          </Route> */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/productInfo">
            <Header />
            <ProductInfo />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
