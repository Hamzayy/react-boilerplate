import React, { PureComponent } from "react";
import "./App.scss";
import Header from "./components/Header";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import Signin from "./containers/SignIn/Signin";
function PrivateRoute({ component: Component, ...rest }) {
  const auth = localStorage.getItem("user") === "true";
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Signin} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
