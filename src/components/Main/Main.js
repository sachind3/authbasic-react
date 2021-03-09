import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppContext from "./../../context/AppContext";
import ProtectedRoutes from "./../../context/ProtectedRoutes";
import Header from "./../../layout/Header";
import Home from "./../../components/Home/Home";
import Profile from "./../../components/Profile/Profile";
import Login from "./../../components/Login/Login";
const Main = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <Router>
      <Header />
      <Switch>
        <ProtectedRoutes path="/profile" auth={isAuth} component={Profile} />
        <ProtectedRoutes path="/login" auth={!isAuth} component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Main;
