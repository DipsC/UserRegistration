import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import ManageUser from "./pages/ManageUser";
import NotFound from "./pages/NotFound";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={ManageUser} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
