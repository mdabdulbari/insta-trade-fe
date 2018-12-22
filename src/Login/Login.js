import React from "react";
import "./Login.css";
import * as B from 'react-bootstrap';
import { Link } from "react-router-dom";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";

class Login extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          password: ''
        };
      }
    
      getValidationState(type) {
        const given_string = this.state.value
        if(type === "password"){
            const length = given_string.length;
            if (length > 8) return 'success';
            else if (length > 0) return 'error';
            return null;
        }
      }
    
      handleChange(e) {
        this.setState({ password: e.target.value });
      }
    
      render() {
        return (
            <div>
            <SecondaryHeader />
                <div className="login-content">    
                    <h2>Login</h2>
                    <br />
                    <B.Form horizontal>
                        <B.FormGroup controlId="formHorizontalEmail">
                            <B.Col sm={10}>
                            <B.FormControl type="email" placeholder="Email" />
                            </B.Col>
                        </B.FormGroup>

                        <B.FormGroup controlId="formHorizontalPassword">
                            <B.Col sm={10}>
                            <B.FormControl type="password" placeholder="Password" />
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
                            <B.Button href="/dashboard" bsStyle="primary">Sign in</B.Button>
                            </B.Col>
                        </B.FormGroup>
                    </B.Form>
                </div>
            </div>
        );
      }
    }

export default Login;