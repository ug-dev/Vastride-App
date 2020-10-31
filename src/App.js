import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Importing Components...
import UserLogin from "./components/UserLogin";
import UserVerification from "./components/UserVerification";
import UserProfile from "./components/UserProfile";
import DriverLogin from "./components/DriverLogin";
import VerifyDriver from "./components/VerifyDriver";
import VerifyDriver2 from "./components/VerifyDriver2";
import VerifyDriver3 from "./components/VerifyDriver3";
import "./App.css";

export default function App() {
  const Home = () => {
    return (
      <center>
        <h1>Home</h1>
      </center>
    );
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user-login" component={UserLogin} />
          <Route path="/user-veri" component={UserVerification} />
          <Route path="/user-profile" component={UserProfile} />
          <Route path="/driver-login" component={DriverLogin} />
          <Route path="/verify-driver" component={VerifyDriver} />
          <Route path="/verify-driver2" component={VerifyDriver2} />
          <Route path="/verify-driver3" component={VerifyDriver3} />
        </Switch>
      </div>
    </Router>
  );
}
