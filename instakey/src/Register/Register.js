import React from "react";
import "./Register.css";
import * as B from 'react-bootstrap';
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader";

class Register extends React.Component {

    constructor() {
        super();
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);

        this.state = {
          email_value: '',
          password_value: '',
          confirm_password_value: ''
        };
      }
    
      getValidationState(type) {
        if (type === "email"){
            const given_string = this.state.email_value;
            if (given_string.indexOf("@") > -1){
                return 'success';
            }
            else if(given_string === ""){
                return ''
            }else{
                return 'error'
            }
        }
        else if (type === "password"){
            const given_string = this.state.password_value;
            const length = given_string.length;
            if (length > 8) return 'success';
            else if (length > 0) return 'error';
            return null;
        }
        else{
            const password = this.state.password_value;
            const confirm_password = this.state.confirm_password_value;
            if (confirm_password === "") return ""
            else if (password !== confirm_password) return "error";
            else return "success";
        }            
      }
    
      handleEmailChange(e) {
        this.setState({ email_value: e.target.value });
      }
      handlePasswordChange(e) {
            this.setState({ password_value: e.target.value })
      }
      handleConfirmPasswordChange(e) {
            this.setState({ confirm_password_value: e.target.value })
      }
    
      render() {
        return (
            <div>
            <SecondaryHeader />
                <div className="register-content">    
                    <h2 class="register-heading">Register</h2>
                    <br/>
                    <form className="form-register">
                        <B.FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState("email")}
                        >
                        <B.FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Email"
                            onChange={this.handleEmailChange}
                        />
                        <B.FormControl.Feedback />
                        </B.FormGroup>
                    </form>
                    <form>
                        <B.FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState("password")}
                        >
                        <B.FormControl
                            type="password"
                            value={this.state.value}
                            placeholder="Password"
                            onChange={this.handlePasswordChange}
                        />
                        <B.FormControl.Feedback />
                        <B.HelpBlock>Password must be atlest 8 characters long.</B.HelpBlock>
                        </B.FormGroup>
                    </form>
                    <form>
                        <B.FormGroup
                        controlId="formBasicText"
                        validationState={this.getValidationState("confirm_password")}
                        >
                        <B.FormControl
                            type="password"
                            value={this.state.value}
                            placeholder="Confirm Password"
                            onChange={this.handleConfirmPasswordChange}
                        />
                        <B.FormControl.Feedback />
                        </B.FormGroup>
                    </form>
                    <B.Button
                        bsStyle="primary"
                    >
                    Register</B.Button>
                </div>
            </div>
        );
      }
    }

export default Register;