import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Signin.scss";

class Signin extends Component {
  state = {
    password: null,
    email: null
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      localStorage.setItem("user", true);
      this.props.history.push('/home')
    }
  };

  render() {
    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        <Form.Label>Login</Form.Label>
        <Form.Group className="col-md-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className="col-md-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default withRouter(Signin);
