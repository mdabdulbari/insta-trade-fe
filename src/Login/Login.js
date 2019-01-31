import React from 'react';
import './Login.css';
import * as B from 'bootstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import SecondaryHeader from '../SecondaryHeader/SecondaryHeader';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  getValidationState(type) {
    const given_string = this.state.value;
    if (type === 'password') {
      const length = given_string.length;
      if (length > 8) return 'success';
      if (length > 0) return 'error';
      return null;
    }
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  async callApi() {
    const response = await fetch('http://localhost:8080/login');
    return await response.json();
  }

  authenticate() {
    const { email, password } = this.state;
    if (email === 'addubari@gmail.com' && password === 'password') {
      this.setState({ isLoggedIn: true });
    }
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        <SecondaryHeader />
        <div className="login-content">
          <h2>Login</h2>
          <br />
          <B.Form horizontal>
            <B.FormGroup controlId="formHorizontalEmail">
              <B.Col sm={10}>
                <B.FormControl onChange={this.handleEmailChange} type="email" placeholder="Email" />
              </B.Col>
            </B.FormGroup>

            <B.FormGroup controlId="formHorizontalPassword">
              <B.Col sm={10}>
                <B.FormControl onChange={this.handlePasswordChange} type="password" placeholder="Password" />
              </B.Col>
            </B.FormGroup>
            <Link to="/register" className="register-text">Don't have an account? Register here.</Link>
            <B.FormGroup>
              <B.Col smOffset={0} sm={10}>
                <B.Checkbox>Remember me</B.Checkbox>
              </B.Col>
            </B.FormGroup>

            <B.FormGroup>
              <B.Col smOffset={0} sm={10}>
                <B.Button onClick={this.authenticate} bsStyle="primary">Sign in</B.Button>
              </B.Col>
            </B.FormGroup>
          </B.Form>
        </div>
        {isLoggedIn ? <Redirect to="/dashboard" /> : <div />}
      </div>
    );
  }
}

export default Login;
