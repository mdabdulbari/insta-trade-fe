import React from "react";
import * as B from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css";



const Header = () => {
    return (
        <div className="App">
            <B.Navbar fixedTop>
                <B.Navbar.Brand>
                    <Link to="/dashboard">Insta Trade</Link>
                </B.Navbar.Brand>
                <B.Nav pullRight>
                    <B.NavDropdown
                        bsStyle="success"
                        title="Abdul Bari"
                        >   
                            <B.MenuItem eventKey="1">
                                <Link to="/profile" className="dropdown-item">My Profile</Link>
                            </B.MenuItem>
                            <B.MenuItem eventKey="2">
                                <Link to="/settings" className="dropdown-item">Settings</Link>
                            </B.MenuItem>
                            <B.MenuItem eventKey="3">
                                <Link to="/contactUs" className="dropdown-item">Contact Us</Link>
                            </B.MenuItem>
                            <B.MenuItem eventKey="4">
                                <Link to="/Login" className="dropdown-logout">Log Out</Link>
                            </B.MenuItem>
                    </B.NavDropdown>
                </B.Nav>
            </B.Navbar>
        </div>
    );
}
export default Header;