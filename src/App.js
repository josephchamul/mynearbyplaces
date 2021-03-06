import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Review from "./components/Review";
import Search from "./components/Search";
import Biz from "./components/Biz";
import Entry from "./components/Entry";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} isAuthed={true} />}
        ></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route
          path="/search"
          render={(props) => <Search {...props} isAuthed={true} />}
        ></Route>
        <Route
          path="/entry"
          render={(props) => <Entry {...props} isAuthed={true} />}
        ></Route>
        <Route
          path="/biz"
          render={(props) => <Biz {...props} isAuthed={true} />}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
